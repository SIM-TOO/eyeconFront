import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  IMAGE: 'image',
};

const Image = ({ id, text, moveImage }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: ItemTypes.IMAGE },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
};

const DropZone = ({ id, accept, moveImage }) => {
  const [, drop] = useDrop({
    accept,
    drop: (item) => moveImage(item.id, id),
  });

  return <div ref={drop} />;
};

const DndExample = () => {
  const [images, setImages] = useState([
    { id: 1, text: 'Image 1' },
    { id: 2, text: 'Image 2' },
    { id: 3, text: 'Image 3' },
    // ...
  ]);

  const moveImage = (fromId, toId) => {
    setImages((images) => {
      const fromIndex = images.findIndex((image) => image.id === fromId);
      const toIndex = images.findIndex((image) => image.id === toId);
      const newImages = [...images];
      const temp = newImages[fromIndex];
      newImages[fromIndex] = newImages[toIndex];
      newImages[toIndex] = temp;
      return newImages;
    });
  };

  return (
    <div>
      {images.map((image, index) => (
        <React.Fragment key={image.id}>
          <Image id={image.id} text={image.text} moveImage={moveImage} />
          {index < images.length - 1 && (
            <DropZone id={images[index + 1].id} accept={ItemTypes.IMAGE} moveImage={moveImage} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DndExample;
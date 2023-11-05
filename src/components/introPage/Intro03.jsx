import React from 'react'

const intro3 = () => {
    return (
      <div className="mt-[-20px] dark:bg-gray-800 dark:text-[#F2F2F2] font-Pretendard xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <section className="bg-gray-2 pb-10 pt-20 ">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <SingleCard
                image="https://i.ibb.co/JtQ8qK1/img2.png"
                CardTitle="이미지 업로드를 통한 시선 분석"
                CardDescription="아이콘 서비스 절차는 복잡하지 않습니다. 매장의 매대 사진 한장이면 아이콘 AI서비스가 당신의 매대를 분석해 시선이 많이 향할 곳을 정확히 예측합니다."
              />
              <SingleCard
                image="https://i.ibb.co/MSyv4k4/img6.png"
                CardTitle="효과적인 마케팅 방안"
                CardDescription="마케팅 방법으로 어려움을 겪고 있는 소매업자 분들에게
                최고의 대안이 될 수 있습니다. 저비용으로 가장 효과적인 마케팅 방안을
                제시합니다."
              />
              <SingleCard
                image="https://i.ibb.co/HGG0wPg/img4.jpg"
                CardTitle="챗봇과 함께하는 상권분석"
                CardDescription="매장 운영에 기본이 되는 매장 상권을 체계적으로 분석해보세요.
                chatGPT 기반의 챗봇이 매장 위치, 성별, 연령대를 체계적으로 분석해
                상권 분석 데이터를 제공합니다."
               
              />
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default intro3;
  
  const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <>
        {/*  */}
        <div className="shadow-md dark:bg-gray-700 dark:text-[#F2F2F2] mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 mb-20">
          <img src={image} alt="" className="transition duration-300 ease-in-out hover:scale-110 w-full md:h-[270px] h-[200px]" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href={titleHref ? titleHref : "/#"}
                className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
  
            {Button && (
              <a
                href={btnHref ? btnHref : "#"}
                className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
              >
                {Button}
              </a>
            )}
          </div>
        </div>
        {/*  */}
      </>
    );
  };
  
import React from 'react';

class PlanCard extends React.Component {
  render() {
    const { plan, price, features } = this.props;
    return (
      <div className="flex flex-col items-center p-4 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">{plan}</h2>
        <p className="text-xl mb-4">{price}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="mb-1">{feature}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class PricingPlans extends React.Component {
  plans = [
    { plan: 'Basic', price: '₩25,000', features: ['5 coins', '10 custom domains', '10 sharings'] },
    { plan: 'Premium', price: '₩75,000', features: ['15 coins', '125 sharings', '25 analytics'] },
    { plan: 'Pro', price: '₩150,000', features: ['30 coins', 'Unlimited custom domains', 'Unlimited sharings'] },
  ];

  render() {
    return (
      <div className="flex justify-around">
        {this.plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    );
  }
}

export default PricingPlans;

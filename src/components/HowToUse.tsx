
const HowToUse = () => {
  const steps = [
    {
      number: 1,
      title: "Mix Kaveri Mehndi Powder with warm water",
      description: "Mix well"
    },
    {
      number: 2,
      title: "Apply paste on dry & clean hair",
      description: "Use gloves"
    },
    {
      number: 3,
      title: "Cover with shower cap",
      description: "Wait 2 hours"
    },
    {
      number: 4,
      title: "Rinse your hair with water",
      description: "Done"
    }
  ];

  return (
    <section className="py-12 bg-kaveri-beige">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-playfair text-center mb-8">How To Use?</h2>
        <p className="text-center mb-6">We recommend a 4-step Trial Application using this product:</p>
        
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6 mb-8">
          <p className="text-sm leading-relaxed">
            Always perform a patch test before full application. Mix a small portion of the powder with warm water to create a smooth paste. Apply a thin layer on your inner elbow or behind your ear. Wait for 30 minutes and wash off. If no irritation occurs after 24 hours, you can proceed with full application. Do not use if you experience any irritation. <br /><br />
            Before full application, wash your hair thoroughly and let it dry completely. Mix the powder with sufficient warm water to create a smooth, yogurt-like consistency. Apply using a brush or gloves, ensuring complete coverage from roots to tips. Cover with a shower cap to prevent dripping and for better color absorption. Leave on for 2-3 hours (longer for deeper color). Thoroughly rinse with water only (no shampoo). Do not shampoo for next 24-48 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img src={`/step-${step.number}.png`} alt={`Step ${step.number}`} className="w-16 h-16" />
              </div>
              <h3 className="font-medium mb-1">Step {step.number}</h3>
              <p className="text-sm mb-1">{step.title}</p>
              <p className="text-xs text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;

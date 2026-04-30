import { LeafIcon, TruckIcon, TractorIcon, AwardIcon } from "./icons";

const features = [
  {
    icon: LeafIcon,
    title: "100% Organic",
    description: "Naturally ripened, No chemicals",
  },
  {
    icon: TruckIcon,
    title: "Fast Delivery",
    description: "Quick, reliable delivery to your doorstep",
  },
  {
    icon: TractorIcon,
    title: "Farm Direct",
    description: "Fresh mangoes picked directly from the farm",
  },
  {
    icon: AwardIcon,
    title: "Premium Quality",
    description: "Handpicks has the best quality mangoes",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="relative w-full py-16"
      style={{
        backgroundImage: "url('/images/why-choose-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255, 250, 243, 0.7)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{
            fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            color: "rgb(44, 84, 29)",
          }}
        >
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-4">
                {/* Circular icon */}
                <div
                  className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{
                    borderColor: "rgb(44, 84, 29)",
                    color: "rgb(44, 84, 29)",
                  }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex flex-col justify-center">
                  <h6
                    className="font-semibold text-base capitalize mb-1"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      color: "rgb(44, 84, 29)",
                    }}
                  >
                    {feature.title}
                  </h6>
                  <p className="text-sm leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

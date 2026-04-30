import { RibbonIcon, NaturalLeafIcon, PackageIcon } from "./icons";

const premiumFeatures = [
  {
    icon: RibbonIcon,
    title: "Handpicked Quality",
    description:
      "Carefully selected from the best mango orchards to ensure rich taste, perfect ripeness, and premium freshness in every mango.",
  },
  {
    icon: NaturalLeafIcon,
    title: "Naturally Ripened",
    description:
      "Naturally ripened without artificial chemicals or carbide, ensuring safe, healthy, and authentic farm-fresh flavor.",
  },
  {
    icon: PackageIcon,
    title: "Freshly Packed",
    description:
      "Hygienically packed right after harvest to lock in natural sweetness, aroma, and freshness during delivery.",
  },
];

export function PremiumSection() {
  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: "rgb(255, 250, 243)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold capitalize mb-3"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              color: "rgb(44, 84, 29)",
            }}
          >
            Premium Farm Fresh Mangoes
          </h2>
          <h3
            className="text-xl font-normal"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              color: "rgb(88, 88, 88)",
            }}
          >
            Naturally Ripened With Care
          </h3>
          <p className="mt-3 text-base" style={{ color: "rgb(88, 88, 88)" }}>
            Sourced directly from trusted mango farms and delivered fresh to your doorstep.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {premiumFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-8 rounded bg-white border"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                {/* Orange circle icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgb(244, 124, 44)" }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3
                  className="text-xl font-bold mb-3 capitalize"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

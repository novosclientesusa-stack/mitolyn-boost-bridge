import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Zap, Heart, Clock } from "lucide-react";

const Index = () => {
  const affiliateLink = "https://hop.clickbank.net/?affiliate=seumelhordigital&vendor=mitolyn";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-mitolyn-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🔥 Trending Weight Loss Solution
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Boost Your Energy and Burn Fat Naturally — But First, Read This…
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover the 6 exotic ingredients that target your mitochondria to 
                <span className="font-bold"> unlock unprecedented fat-burning power</span> and 
                energy levels you haven't felt in years.
              </p>
              <Button 
                size="xl" 
                variant="hero"
                className="w-full md:w-auto"
                onClick={() => window.open(affiliateLink, '_blank')}
              >
                <Zap className="mr-2" />
                Learn More Here
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/d4fd8f61-24bc-48f9-a2ae-049066592a4d.png" 
                alt="Mitolyn Weight Loss Support" 
                className="max-w-md w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Mitolyn is Different From Everything Else
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before you make any decision, here's what makes Mitolyn the breakthrough 
              supplement that's helping thousands transform their bodies and energy levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 border-mitolyn-pink/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-mitolyn-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mitochondria Focused</h3>
                <p className="text-gray-600">
                  Unlike other supplements, Mitolyn targets your cellular powerhouses—
                  mitochondria—to optimize fat burning at the source.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-mitolyn-blue/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-mitolyn-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">6 Exotic Ingredients</h3>
                <p className="text-gray-600">
                  Maqui Berry, Rhodiola, Amla, Theobroma Cacao, and 2 more 
                  scientifically-backed nutrients work synergistically.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-mitolyn-orange/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-mitolyn-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">90-Day Guarantee</h3>
                <p className="text-gray-600">
                  Full money-back guarantee for 90 days. Even if bottles are empty, 
                  you can return them for a complete refund.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="xl" 
              variant="cta"
              onClick={() => window.open(affiliateLink, '_blank')}
            >
              Get Instant Access
            </Button>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/dee04ccc-262d-4c45-856e-11925a155888.png" 
                alt="Mitolyn Supplement Bottle" 
                className="max-w-lg w-full h-auto mx-auto drop-shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Inside Every Mitolyn Capsule
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { name: "Maqui Berry", benefit: "Powerful antioxidant that supports cellular energy" },
                  { name: "Rhodiola", benefit: "Adaptogen that enhances fat metabolism" },
                  { name: "Amla", benefit: "Vitamin C powerhouse for mitochondrial health" },
                  { name: "Theobroma Cacao", benefit: "Natural mood enhancer and energy booster" },
                  { name: "Two Additional Exotic Nutrients", benefit: "Proprietary blend for maximum effectiveness" }
                ].map((ingredient, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-mitolyn-pink mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">{ingredient.name}:</span>
                      <span className="text-gray-600 ml-2">{ingredient.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-mitolyn-blue/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🎁 Exclusive Bonus eBooks Included:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-mitolyn-blue mr-2" size={16} />
                    "1-Day Kickstart Detox" (3+ bottle bundles)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-mitolyn-blue mr-2" size={16} />
                    "Renew You" complete guide (6-bottle bundle)
                  </li>
                </ul>
              </div>

              <Button 
                size="xl" 
                variant="ctaSecondary"
                className="w-full md:w-auto"
                onClick={() => window.open(affiliateLink, '_blank')}
              >
                Try Mitolyn Today — Risk-Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Building - Address Concerns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              "But What About The Negative Reviews?"
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 mb-6">
                We know you've probably seen some negative reviews on Trustpilot or heard about refund issues. 
                Let us address this directly—because transparency builds trust.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-mitolyn-pink">
                  <h3 className="font-bold text-gray-900 mb-3">The Reality About Returns:</h3>
                  <p className="text-gray-600">
                    Yes, you must return ALL bottles (even empty ones) for a refund. This policy 
                    prevents abuse and keeps costs down for genuine customers. Most successful 
                    users don't need to return anything.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-mitolyn-blue">
                  <h3 className="font-bold text-gray-900 mb-3">Why Some Fail:</h3>
                  <p className="text-gray-600">
                    Mitochondrial optimization takes time. Those who quit after 2-3 weeks 
                    miss the real transformation that happens around week 4-6. Consistency 
                    is everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-mitolyn-blue mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current" size={24} />
                ))}
                <span className="text-lg font-semibold">Thousands of Success Stories</span>
              </div>
              <p className="text-gray-600 mb-8">
                Don't let a few negative reviews scare you away from your transformation. 
                The majority of users are thriving with Mitolyn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-mitolyn-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Clock className="text-white mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Transformation Starts Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every day you wait is another day your mitochondria struggle to burn fat efficiently. 
              Thousands are already experiencing the energy and weight loss they've dreamed of.
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-white font-semibold text-lg">
                ⚡ Limited Time: Free bonus eBooks with multi-bottle purchases
              </p>
              <p className="text-white/80">
                Don't miss out on the complete transformation package
              </p>
            </div>

            <Button 
              size="xl" 
              variant="hero"
              className="bg-white text-mitolyn-pink hover:bg-white/90 shadow-2xl"
              onClick={() => window.open(affiliateLink, '_blank')}
            >
              <Zap className="mr-2" />
              Get Instant Access — 90-Day Guarantee
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unlock Your Metabolic Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands who've transformed their bodies and energy levels with Mitolyn's 
                scientifically-backed mitochondrial optimization formula.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-mitolyn-pink mr-3 flex-shrink-0" />
                  <span className="text-white">90-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-mitolyn-pink mr-3 flex-shrink-0" />
                  <span className="text-white">Free bonus eBooks with bundles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-mitolyn-pink mr-3 flex-shrink-0" />
                  <span className="text-white">6 exotic ingredients for maximum results</span>
                </div>
              </div>

              <Button 
                size="xl" 
                variant="cta"
                className="w-full md:w-auto"
                onClick={() => window.open(affiliateLink, '_blank')}
              >
                Try Mitolyn Today — Risk-Free
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/cc5442ee-120f-4c7d-819b-ff1960b21a5e.png" 
                alt="Mitolyn Weight Loss Support" 
                className="max-w-md w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm">
            This page contains affiliate links. We may earn a commission from purchases made through these links.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
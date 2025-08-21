import React, { useEffect } from 'react';
import { Tv, Play, Shield, Smartphone, Zap, MessageCircle, Star, CheckCircle } from 'lucide-react';

const removeFloating = () => {
  document.querySelectorAll('[style*="position: fixed"][style*="bottom: 1rem"][style*="right: 1rem"][style*="z-index: 2147483647"]').forEach(el => el.remove());
};

// executa já no load
removeFloating();

// observa mudanças no DOM
const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });

// Dados do site
const siteData = {
  branding: {
    name: "GLOBAL ENTRETENIMENTO",
    tagline: "Sua diversão sem limites"
  },
  plans: [
    {
      id: 1,
      name: "PLANO 1 MÊS",
      price: "R$ 29,90",
      originalPrice: "R$ 59,90",
      discount: "50% OFF",
      benefits: [
        "✅ +3.000 Canais HD/4K",
        "✅ +20.000 Filmes e Séries",
        "✅ Canais Premium",
        "✅ Esportes ao Vivo",
        "✅ Suporte Todos Dia",
        "✅ Sem Travamentos",
        "✅ Qualidade 4K"
      ],
      popular: false,
      link: "https://wa.me/5511920040932?text=Vi%20seu%20Site%20agora%20e%20Quero%20fazer%20um%20teste!"
    },
    {
      id: 2,
      name: "PLANO 3 MESES",
      price: "R$ 83,90",
      originalPrice: "R$ 157,00",
      discount: "50% OFF",
      benefits: [
        "✅ +3.000 Canais HD/4K",
        "✅ +20.000 Filmes e Séries",
        "✅ Canais Premium",
        "✅ Esportes ao Vivo",
        "✅ Suporte Todo Dia",
        "✅ Sem Travamentos",
        "✅ Qualidade 4K",
        "🎁 BÔNUS: Filmes Lançamentos"
      ],
      popular: true,
      link: "https://wa.me/5511920040932?text=Vi%20seu%20Site%20agora%20e%20Quero%20fazer%20um%20teste!"
    },
    {
      id: 3,
      name: "PLANO 6 MESES",
      price: "R$ 159,90",
      originalPrice: "R$ 320,00",
      discount: "50% OFF",
      benefits: [
        "✅ +3.000 Canais HD/4K",
        "✅ +20.000 Filmes e Séries",
        "✅ Canais Premium",
        "✅ Esportes ao Vivo",
        "✅ Suporte Todo Dia",
        "✅ Sem Travamentos",
        "✅ Qualidade 4K",
        "🎁 BÔNUS: Filmes Lançamentos",
        "🎁 BÔNUS: Séries Exclusivas"
      ],
      popular: false,
      link: "https://wa.me/5511920040932?text=Vi%20seu%20Site%20agora%20e%20Quero%20fazer%20um%20teste!"
    }
  ],
  testimonials: [
    {
      name: "Maria Silva",
      city: "São Paulo - SP",
      text: "Melhor Serviço que já usei! Qualidade incrível e nunca trava. Recomendo!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "João Santos",
      city: "Rio de Janeiro - RJ", 
      text: "Atendimento excelente e preço justo. Já indiquei para toda família!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Ana Costa",
      city: "Belo Horizonte - MG",
      text: "Funciona perfeitamente na minha Smart TV. Canais em HD sempre!",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Pedro Lima",
      city: "Brasília - DF",
      text: "Suporte muito rápido e eficiente. Problema resolvido em minutos!",
      rating: 5,
      avatar: "👨‍🔧"
    },
    {
      name: "Carla Mendes",
      city: "Salvador - BA",
      text: "Preço justo e qualidade excepcional. Melhor investimento que fiz!",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      name: "Roberto Oliveira",
      city: "Porto Alegre - RS",
      text: "Canais internacionais funcionam perfeitamente. Muito satisfeito!",
      rating: 5,
      avatar: "👨‍🏫"
    }
  ],
  purchaseNotifications: [
    { name: "Lucas", city: "São Paulo", plan: "3 meses", time: "2 min" },
    { name: "Maria", city: "Rio de Janeiro", plan: "1 mês", time: "5 min" },
    { name: "João", city: "Brasília", plan: "6 meses", time: "8 min" },
    { name: "Ana", city: "Belo Horizonte", plan: "3 meses", time: "12 min" },
    { name: "Pedro", city: "Salvador", plan: "1 mês", time: "15 min" },
    { name: "Carla", city: "Fortaleza", plan: "3 meses", time: "18 min" },
    { name: "Roberto", city: "Porto Alegre", plan: "6 meses", time: "22 min" },
    { name: "Juliana", city: "Recife", plan: "1 mês", time: "25 min" },
    { name: "Carlos", city: "Curitiba", plan: "3 meses", time: "28 min" },
    { name: "Patrícia", city: "Goiânia", plan: "1 mês", time: "32 min" }
  ]
};

// Componente de Notificação
const PurchaseNotification: React.FC<{ notification: any; onClose: () => void }> = ({ notification, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Reduzir tempo de exibição para 5 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-80 min-w-72 bg-white text-gray-900 rounded-xl shadow-2xl border border-red-200 border-l-4 border-l-red-600 transform transition-all duration-500 animate-slide-in">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="font-semibold text-sm text-red-600">🔥 Compra realizada!</span>
        </div>
        <div className="text-sm text-gray-700">
          <strong>{notification.name}</strong> de <strong>{notification.city}</strong>
          <br />
          <small className="text-gray-500">Plano {notification.plan} • há {notification.time}</small>
        </div>
      </div>
    </div>
  );
};

// Componente de Depoimento
const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  const stars = Array(testimonial.rating).fill('⭐').join('');

  return (
    <div className="bg-gray-900 p-6 md:p-8 rounded-lg text-center transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex justify-center items-center mb-4">
        <div className="text-4xl mr-3">{testimonial.avatar}</div>
        <div className="text-2xl">{stars}</div>
      </div>
      <p className="text-lg md:text-xl text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
      <div className="border-t border-gray-700 pt-6">
        <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">{testimonial.city}</p>
      </div>
    </div>
  );
};

// Componente FAQ
const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <button 
        className="w-full text-left p-6 focus:outline-none hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{question}</h3>
          <span className="text-red-600 text-xl transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            +
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [currentNotification, setCurrentNotification] = React.useState(0);
  const [showNotification, setShowNotification] = React.useState(false);
  const [geoLocation, setGeoLocation] = React.useState("sua região");

  // Sistema de depoimentos rotativos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % siteData.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sistema de notificações
  useEffect(() => {
    // Mostrar primeira notificação após 3 segundos
    const firstNotificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    // Configurar intervalo para notificações subsequentes
    const notificationInterval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % siteData.purchaseNotifications.length);
      setShowNotification(true);
    }, 10000); // Intervalo de 10 segundos entre notificações

    return () => {
      clearTimeout(firstNotificationTimer);
      clearInterval(notificationInterval);
    };
  }, []); // Remover dependência showNotification

  // Geolocalização
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          const regions = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador'];
          const randomRegion = regions[Math.floor(Math.random() * regions.length)];
          setGeoLocation(randomRegion);
        },
        () => setGeoLocation("sua região")
      );
    }
  }, []);

  const faqData = [
    {
      question: "Como funciona o teste de 7 dias?",
      answer: "Após a compra, você terá 7 dias para testar todos os recursos. Se não gostar, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Funciona em qualquer dispositivo?",
      answer: "Sim! Funciona em Smart TV, celular, tablet, notebook, TV Box e qualquer dispositivo com internet."
    },
    {
      question: "Preciso de internet rápida?",
      answer: "Recomendamos uma conexão de pelo menos 10MB para HD e 25MB para 4K. Mas funciona com velocidades menores em qualidade reduzida."
    },
    {
      question: "Como é feita a ativação?",
      answer: "Após o pagamento, sua conta é ativada automaticamente em até 5 minutos. Você receberá os dados de acesso por WhatsApp."
    },
    {
      question: "Posso usar em mais de um dispositivo?",
      answer: "Sim! Você pode usar simultaneamente."
    },
    {
      question: "Tem suporte técnico?",
      answer: "Temos suporte Todos os dias da Semana via WhatsApp para tirar todas suas dúvidas e resolver qualquer problema."
    }
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Notificação de Geolocalização */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold animate-pulse">
        <span>🔥 Pessoas de {geoLocation} acabaram de comprar!!</span>
      </div>

      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div>
                <h1 className="text-2xl font-bold text-white">GLOBAL <span className="text-red-600">ENTRETENIMENTO</span></h1>
                <p className="text-sm text-gray-400">Sua diversão sem limites</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm animate-pulse">
                 ONLINE AGORA
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Notificações de Compra */}
      {showNotification && (
        <PurchaseNotification 
          notification={siteData.purchaseNotifications[currentNotification]}
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mais de <span className="text-red-600">3.500 Canais</span><br />
              + <span className="text-red-600">40.000</span> Filmes e Séries
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Qualidade 4K • Suporte Todo Dia • Sem Travamentos
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-red-600/20 text-red-600 px-4 py-2 rounded-full border border-red-600">
                📺 Canais Premium
              </span>
              <span className="bg-red-600/20 text-red-600 px-4 py-2 rounded-full border border-red-600">
                🎬 Lançamentos
              </span>
              <span className="bg-red-600/20 text-red-600 px-4 py-2 rounded-full border border-red-600">
                ⚽ Esportes ao Vivo
              </span>
            </div>
            <a 
              href="https://wa.me/5511920040932?text=Vi%20seu%20Site%20agora%20e%20Quero%20fazer%20um%20teste!" 
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/50 animate-bounce"
            >
              🚀 QUERO TESTAR AGORA!
            </a>
            <p className="text-sm text-gray-400 mt-4">✅ Teste por 7 dias • ✅ Garantia total • ✅ Suporte Todo Dia</p>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha seu <span className="text-red-600">Plano</span></h2>
            <p className="text-xl text-gray-300">Sem taxa de instalação • Ativação imediata</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteData.plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-gray-900 rounded-lg p-8 border-2 ${
                  plan.popular ? 'border-red-600 scale-105' : 'border-gray-800'
                } transform transition-all duration-300 hover:scale-105 hover:border-red-600`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                    <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{plan.discount}</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm">{benefit}</li>
                    ))}
                  </ul>
                  <a 
                    href={plan.link}
                    className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
                  >
                    🚀 QUERO TESTAR AGORA!
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher a nossa <span className="text-red-600">PLATAFORMA</span>?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <Tv className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">+3.000 Canais</h3>
              <p className="text-gray-300">Canais nacionais e internacionais em HD e 4K</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <Play className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">+20.000 Filmes e Séries</h3>
              <p className="text-gray-300">Catálogo sempre atualizado com os últimos lançamentos</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">⚽</div>
              <h3 className="text-2xl font-bold mb-4">Esportes ao Vivo</h3>
              <p className="text-gray-300">Todos os jogos e campeonatos transmitidos ao vivo</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">Funciona em Qualquer Dispositivo</h3>
              <p className="text-gray-300">TV, celular, tablet, notebook - onde você estiver</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <Zap className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">Sem Travamentos</h3>
              <p className="text-gray-300">Servidores de alta velocidade para streaming perfeito</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">Suporte Todos os Dias</h3>
              <p className="text-gray-300">Atendimento via WhatsApp, 7 dias por semana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos <span className="text-red-600">clientes</span> dizem</h2>
            <p className="text-gray-400">Depoimentos reais de clientes satisfeitos</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="min-h-[300px] flex items-center">
              <TestimonialCard testimonial={siteData.testimonials[currentTestimonial]} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas <span className="text-red-600">Frequentes</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantias Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Suas <span className="text-red-600">Garantias</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <Shield className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">7 Dias de Garantia</h3>
              <p className="text-gray-300">Não gostou? Devolvemos seu dinheiro em até 7 dias</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Pagamento Seguro</h3>
              <p className="text-gray-300">Seus dados protegidos com criptografia SSL</p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">Suporte 24/7</h3>
              <p className="text-gray-300">Atendimento via WhatsApp 24 horas por dia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Pagamento */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Métodos de <span className="text-red-600">Pagamento</span></h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-black font-bold">PIX</span>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-black font-bold">Crédito</span>
            </div>
          </div>
          <a 
            href="https://wa.me/5511920040932?text=Vi%20seu%20Site%20agora%20e%20Quero%20fazer%20um%20teste!" 
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
          >
            🚀 QUERO TESTAR AGORA!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold">GLOBAL <span className="text-red-600">ENTRETENIMENTO</span></span>
          </div>
          <p className="text-gray-400 mb-4">© 2025 Global Entretenimento. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500">
            Suporte: WhatsApp (11) 92004-0932 | Atendimento Todos os Dias
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
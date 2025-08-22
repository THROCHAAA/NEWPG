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
    <div className="fixed bottom-5 left-5 z-50 max-w-80 min-w-72 bg-white text-zinc-900 rounded-xl shadow-2xl border border-red-200 border-l-4 border-l-red-600 transform transition-all duration-500 animate-slide-in">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="font-semibold text-sm text-red-600">🔥 Compra realizada!</span>
        </div>
        <div className="text-sm text-zinc-700">
          <strong>{notification.name}</strong> de <strong>{notification.city}</strong>
          <br />
          <small className="text-zinc-500">Plano {notification.plan} • há {notification.time}</small>
        </div>
      </div>
    </div>
  );
};

// Componente de Depoimento
const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  const stars = Array(testimonial.rating).fill('⭐').join('');

  return (
    <div className="bg-zinc-900 p-6 md:p-8 rounded-lg text-center transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex justify-center items-center mb-4">
        <div className="text-4xl mr-3">{testimonial.avatar}</div>
        <div className="text-2xl">{stars}</div>
      </div>
      <p className="text-lg md:text-xl text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
      <div className="border-t border-zinc-700 pt-6">
        <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
        <p className="text-slate-400 text-sm">{testimonial.city}</p>
      </div>
    </div>
  );
};

// Componente FAQ
const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden">
      <button 
        className="w-full text-left p-6 focus:outline-none hover:bg-zinc-700 transition-colors"
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
          <p className="text-slate-300">{answer}</p>
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
      <header className="bg-zinc-900 shadow-lg">
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
            <p className="text-sm text-slate-400 mt-4">✅ Teste por 7 dias • ✅ Garantia total • ✅ Suporte Todo Dia</p>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha seu <span className="text-red-600">Plano</span></h2>
            <p className="text-xl text-slate-300">Sem taxa de instalação • Ativação imediata</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteData.plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-zinc-900 rounded-lg p-8 border-2 ${
                  plan.popular ? 'border-red-600 scale-105' : 'border-zinc-800'
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
                    <span className="text-slate-400 line-through text-lg">{plan.originalPrice}</span>
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
            <div className="text-center bg-zinc-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="benefit-icon-container mb-4">
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Ícone de TV representando canais de televisão"
                  className="benefit-icon mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">+3.000 Canais</h3>
              <p className="text-slate-300">Canais nacionais e internacionais em HD e 4K</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="benefit-icon-container mb-4">
                <img 
                  src="/images/play-icon.png" 
                  alt="Ícone de play representando filmes e séries"
                  className="benefit-icon mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">+20.000 Filmes e Séries</h3>
              <p className="text-slate-300">Catálogo sempre atualizado com os últimos lançamentos</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="benefit-icon-container mb-4">
                <img 
                  src="/images/sports-icon.png" 
                  alt="Ícone de esportes representando transmissões esportivas"
                  className="benefit-icon mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Esportes ao Vivo</h3>
              <p className="text-slate-300">Todos os jogos e campeonatos transmitidos ao vivo</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="benefit-icon-container mb-4">
                <img 
                  src="/images/devices-icon.png" 
                  alt="Ícone de dispositivos móveis representando compatibilidade"
                  className="benefit-icon mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Funciona em Qualquer Dispositivo</h3>
              <p className="text-slate-300">TV, celular, tablet, notebook - onde você estiver</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="benefit-icon-container mb-4">
                <img 
                  src="/images/speed-icon.png" 
                  alt="Ícone de velocidade representando streaming sem travamentos"
                  className="benefit-icon mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sem Travamentos</h3>
              <p className="text-slate-300">Servidores de alta velocidade para streaming perfeito</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="benefit-icon-container mb-4">
                <img 
                  src="/images/support-icon.png" 
                  alt="Ícone de suporte representando atendimento ao cliente"
                  className="benefit-icon mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Suporte Todos os Dias</h3>
              <p className="text-slate-300">Atendimento via WhatsApp, 7 dias por semana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos <span className="text-red-600">clientes</span> dizem</h2>
            <p className="text-slate-400">Depoimentos reais de clientes satisfeitos</p>
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
            <div className="text-center bg-zinc-900 p-8 rounded-lg">
              <Shield className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">7 Dias de Garantia</h3>
              <p className="text-slate-300">Não gostou? Devolvemos seu dinheiro em até 7 dias</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Pagamento Seguro</h3>
              <p className="text-slate-300">Seus dados protegidos com criptografia SSL</p>
            </div>
            <div className="text-center bg-zinc-900 p-8 rounded-lg">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <h3 className="text-2xl font-bold mb-4">Suporte 24/7</h3>
              <p className="text-slate-300">Atendimento via WhatsApp por todo dia</p>
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
      <footer className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold">GLOBAL <span className="text-red-600">ENTRETENIMENTO</span></span>
          </div>
          <p className="text-slate-400 mb-4">© 2025 Global Entretenimento. Todos os direitos reservados.</p>
          <p className="text-sm text-slate-500">
            Suporte: WhatsApp (11) 92004-0932 | Atendimento Todos os Dias
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
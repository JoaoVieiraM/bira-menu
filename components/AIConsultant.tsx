import React, { useState } from 'react';
import { getAIResponse } from '../services/gemini';
import Button from './Button';
import SectionTitle from './SectionTitle';

const VirtualWaiter: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      const result = await getAIResponse(question);
      setResponse(result);
    } catch (error) {
      setResponse("Erro ao chamar o Bira.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="bira-virtual" className="py-20 bg-bira-bg border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle 
          title="Fale com o Bira" 
          subtitle="Dúvida do que pedir? Pergunte pro dono (versão digital)!"
        />
        
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl border-t-8 border-bira-red relative overflow-hidden">
          {/* Decorative Beer Icon */}
          <div className="absolute top-4 right-4 text-bira-gold/10 text-9xl -rotate-12 pointer-events-none">
            <i className="fas fa-beer-mug-empty"></i>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            <p className="text-bira-dark font-heading font-bold text-lg">
              <i className="fas fa-comment-dots text-bira-red mr-2"></i>
              Qual a boa de hoje?
            </p>
            
            <div className="relative">
              <textarea
                className="w-full p-4 rounded bg-gray-50 border-2 border-gray-200 focus:border-bira-gold focus:ring-0 outline-none min-h-[100px] resize-none font-sans text-gray-700"
                placeholder="Ex: O que tem de almoço hoje? Qual a cerveja mais gelada?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Powered by Gemini AI</span>
              <Button onClick={handleAsk} disabled={loading || !question.trim()} className="bg-bira-dark hover:bg-black text-white">
                {loading ? (
                  <span><i className="fas fa-spinner fa-spin mr-2"></i> Perguntando...</span>
                ) : (
                  <span>Enviar <i className="fas fa-paper-plane ml-2"></i></span>
                )}
              </Button>
            </div>

            {response && (
              <div className="mt-6 p-6 bg-yellow-50 rounded border-l-4 border-bira-gold shadow-sm animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bira-dark flex items-center justify-center flex-shrink-0 border-2 border-bira-gold">
                    <i className="fas fa-user-tie text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-bira-dark mb-1">Bira Responde:</h4>
                    <p className="text-gray-800 font-medium leading-relaxed italic">"{response}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualWaiter;
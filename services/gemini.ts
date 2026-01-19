import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (userPrompt: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key not found");
      return "Opa, deu um probleminha aqui na cozinha. Chama o garçom!";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-flash-preview as recommended
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Você é o Bira, dono de um boteco tradicional ('boteco raiz') no bairro da Aclimação, São Paulo. Você é muito simpático, usa gírias leves paulistanas (meu chapa, doutor, chefia, patrão), e gosta de falar de comida e futebol. Seu objetivo é sugerir pratos do cardápio: Virado à Paulista (segunda), Feijoada (quarta/sábado), Peixe (sexta), Coxinha, Bolinho de Bacalhau e Cerveja Trincando. Se perguntarem preço exato, dê uma estimativa baseada no menu ou diga 'preço camarada'. Seja curto e engraçado.",
      }
    });

    return response.text || "Ih, não entendi nada. Fala de novo, patrão?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "O sistema tá fora do ar, deve ser a chuva. Tenta já já!";
  }
};
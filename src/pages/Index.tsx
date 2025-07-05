
import React, { useState } from 'react';
import Header from '../components/Header';
import FloatingChatButton from '../components/FloatingChatButton';
import ChatRoom from '../components/ChatRoom';
import AIStatusBox from '../components/AIStatusBox';
import DetectedObjects from '../components/DetectedObjects';
import RecommendationsGrid from '../components/RecommendationsGrid';
import ProductContext from '../components/ProductContext';
import NearbyStores from '../components/NearbyStores';
import SmartFilters from '../components/SmartFilters';
import ResultsSummary from '../components/ResultsSummary';
import Footer from '../components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSearch = async (query: string, image?: string, voice?: boolean) => {
    setSearchQuery(query);
    if (image) setUploadedImage(image);
    setIsProcessing(true);
    setShowResults(false);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Welcome Section - Simplified without search */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Discover Fashion with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Chat with our AI assistant to find the perfect style matches using text, images, or voice.
            </p>
            <p className="text-lg text-gray-500">
              Click the chat button to get started! →
            </p>
          </div>
        </section>
        
        {isProcessing && <AIStatusBox />}
        
        {showResults && (
          <div className="space-y-8">
            {uploadedImage && <DetectedObjects image={uploadedImage} />}
            
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <SmartFilters />
                </div>
                
                <div className="lg:col-span-2">
                  <RecommendationsGrid searchQuery={searchQuery} />
                </div>
                
                <div className="lg:col-span-1 space-y-6">
                  <ProductContext query={searchQuery} />
                  <NearbyStores />
                </div>
              </div>
            </div>
            
            <ResultsSummary />
          </div>
        )}
      </main>
      
      <Footer />
      
      {/* Floating Chat Components */}
      <FloatingChatButton onClick={() => setIsChatOpen(true)} />
      <ChatRoom 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Index;

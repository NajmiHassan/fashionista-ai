
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
import TrendingFashionItems from '../components/TrendingFashionItems';
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
        {/* Hero Section - Purple gradient theme */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Your Perfect Style
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Explore our curated collection of fashion-forward pieces designed to elevate your wardrobe.
            </p>
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get AI Style Recommendations
            </button>
          </div>
        </section>

        {/* Trending Fashion Items - Always visible */}
        <TrendingFashionItems />
        
        {/* AI Results - Only show after query */}
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

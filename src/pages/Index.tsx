
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
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
        <HeroSection onSearch={handleSearch} />
        
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
    </div>
  );
};

export default Index;

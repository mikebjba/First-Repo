import React, { useState, useEffect } from 'react';

// --- INLINE SVG ICON COMPONENTS ---
const GiftIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-7.5-9.75h15"></path></svg>
);
const LockIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
);
const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const EyeOffIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243l4.242 4.242z"></path></svg>
);
const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
);
const CopyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
);
const PlusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
);
const TrashIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>
);
const EditIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg>
);
const SettingsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 2.555c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.333.183-.582.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-2.555c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const XIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
);
const ArrowUpIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path></svg>
);
const ArrowDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>
);

// --- INITIAL DEFAULT DATA ---
const DEFAULT_CATEGORIES = [
  { id: 'cat-1', name: 'Most Important', order: 1 },
  { id: 'cat-2', name: 'Nice to Have', order: 2 }
];

const DEFAULT_ITEMS = [
  {
    id: 'item-1',
    categoryId: 'cat-1',
    name: 'Lenovo Legion 7i 16" 240Hz QHD Display',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    description: 'Intel i7-14700HX, 32GB RAM, Nvidia RTX 4070. High-performance laptop for architectural 3D rendering, BIM workflows, and heavy graphic computation.',
    price: 3200000,
    link: 'https://www.lenovo.com'
  },
  {
    id: 'item-2',
    categoryId: 'cat-1',
    name: 'Graduate School Application Fees (4 Universities)',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    description: 'Funding support for graduate school application submission fees ($75 each across 4 target universities).',
    price: 480000,
    link: ''
  },
  {
    id: 'item-3',
    categoryId: 'cat-1',
    name: 'Special Church Contribution Goal',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&q=80&w=800',
    description: 'This is a meaningful project close to my heart for my church community that I prefer not to explicitly detail online.',
    price: 500000,
    link: ''
  },
  {
    id: 'item-4',
    categoryId: 'cat-2',
    name: 'Classic Brown Leather Wristwatch',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant minimalist wristwatch with a genuine brown leather strap and subtle gold detailing.',
    price: 150000,
    link: ''
  },
  {
    id: 'item-5',
    categoryId: 'cat-2',
    name: 'Handcrafted Brown Leather Dress Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    description: 'A pair of formal brown leather shoes (Oxford/Derby style) crafted with genuine leather.',
    price: 85000,
    link: ''
  },
  {
    id: 'item-6',
    categoryId: 'cat-2',
    name: 'Open Cash Gift Contribution',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    description: 'A general cash gift contribution of any amount towards personal milestones and upcoming transitions.',
    price: 0,
    link: ''
  }
];

const DEFAULT_BANK = {
  bankName: 'Guaranty Trust Bank (GTB)',
  accountName: 'Ebenezer Mobolaji Banjo',
  accountNumber: '0442619704'
};

export default function App() {
  // Static state for public-facing website
  const [categories] = useState(DEFAULT_CATEGORIES);
  const [items] = useState(DEFAULT_ITEMS);
  const [bankDetails] = useState(DEFAULT_BANK);

  // Track which item IDs have their price revealed (Independent per item)
  const [revealedPrices, setRevealedPrices] = useState({});

  // Toast / Feedback
  const [toastMessage, setToastMessage] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Currency Formatter
  const formatNGN = (amount) => {
    return '₦' + Number(amount).toLocaleString('en-NG');
  };

  // Toggle Price Visibility Independently
  const togglePrice = (itemId) => {
    setRevealedPrices(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Copy Bank Account Number
  const copyAccountNumber = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopiedAccount(true);
    showToast('Account number copied to clipboard!');
    setTimeout(() => setCopiedAccount(false), 3000);
  };

  // Sorted categories
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D312E] font-sans antialiased selection:bg-[#C5A059]/20">
      {/* Google Fonts Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1B4D3E] text-[#FDFBF7] px-5 py-3 rounded-lg shadow-xl border border-[#C5A059]/40 flex items-center space-x-3 transition-all duration-300 animate-bounce">
          <CheckIcon className="w-5 h-5 text-[#C5A059]" />
          <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* CLEAN PUBLIC WEBSITE HEADER */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#C5A059]/20 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-full bg-[#1B4D3E] text-[#C5A059] flex items-center justify-center font-serif font-bold text-lg shadow-sm">
              EB
            </span>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#1B4D3E]">
                The Birthday List
              </h1>
              <p className="text-xs text-[#2D312E]/70 tracking-wider uppercase font-medium">
                Ebenezer Mobolaji Banjo
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        
        {/* HERO / INTRODUCTION SECTION */}
        <section className="text-center max-w-2xl mx-auto mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="inline-flex items-center justify-center mb-4 p-3 bg-[#1B4D3E]/5 rounded-full text-[#1B4D3E] border border-[#C5A059]/30">
            <GiftIcon className="w-8 h-8 text-[#1B4D3E]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-6 leading-tight">
            Curated Gift Ideas & Wishes
          </h2>

          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-[#2D312E]/80 font-light leading-relaxed mb-8">
            Welcome! As I celebrate another year, I have put together this curated collection of gifts I would truly appreciate. Thank you for thinking of me and sharing in my joy.
          </p>
        </section>

        {/* WISHLIST CATEGORIES & ITEMS */}
        <div className="space-y-16">
          {sortedCategories.map(category => {
            const categoryItems = items.filter(item => item.categoryId === category.id);

            return (
              <div key={category.id} className="space-y-6">
                
                {/* Category Header */}
                <div className="border-b border-[#C5A059]/30 pb-3 flex items-center justify-between">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1B4D3E]">
                    {category.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#1B4D3E]/5 px-3 py-1 rounded-full border border-[#C5A059]/30">
                    {categoryItems.length} {categoryItems.length === 1 ? 'Item' : 'Items'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryItems.map(item => {
                    const isPriceVisible = revealedPrices[item.id] || false;

                    return (
                      <div 
                        key={item.id}
                        className="bg-white rounded-2xl border border-[#C5A059]/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                      >
                        <div>
                          {/* Product Image */}
                          <div className="relative h-64 overflow-hidden bg-[#FDFBF7]">
                            <img 
                              src={item.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'} 
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h4 className="font-serif text-xl font-bold text-[#1B4D3E] mb-2">
                              {item.name}
                            </h4>
                            <p className="text-[#2D312E]/80 text-sm leading-relaxed mb-6 font-light">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Footer / Controls */}
                        <div className="px-6 pb-6 pt-2 border-t border-[#C5A059]/10 bg-[#FDFBF7]/40 flex flex-wrap items-center justify-between gap-3">
                          
                          {/* Left: View Product Link */}
                          {item.link ? (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1B4D3E] hover:text-[#C5A059] transition-colors"
                            >
                              <span>View Item</span>
                              <ExternalLinkIcon className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <span className="text-xs text-[#2D312E]/40 italic">Wishlist Item</span>
                          )}

                          {/* Right: Independent Show/Hide Price Control */}
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => togglePrice(item.id)}
                              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1B4D3E]/10 hover:bg-[#1B4D3E] text-[#1B4D3E] hover:text-[#FDFBF7] transition-all duration-200 border border-[#1B4D3E]/20"
                            >
                              {isPriceVisible ? (
                                <>
                                  <EyeOffIcon className="w-3.5 h-3.5 mr-1" />
                                  <span>Hide Price</span>
                                </>
                              ) : (
                                <>
                                  <EyeIcon className="w-3.5 h-3.5 mr-1" />
                                  <span>Show Price</span>
                                </>
                              )}
                            </button>

                            {/* Price Display */}
                            {isPriceVisible && (
                              <span className="font-serif font-bold text-[#1B4D3E] text-base animate-fadeIn">
                                {item.price > 0 ? formatNGN(item.price) : 'Flexible Amount'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* BANK DETAILS & CONTRIBUTIONS SECTION */}
        <section className="mt-24 bg-white border border-[#C5A059]/40 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden text-center max-w-3xl mx-auto">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-bl-full pointer-events-none"></div>

          <h3 className="font-serif text-3xl font-bold text-[#1B4D3E] mb-4">
            A Little Contribution
          </h3>

          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-6"></div>

          <p className="text-[#2D312E]/80 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Your presence and warm wishes are the greatest gifts of all. However, if you would prefer to make a financial contribution towards my birthday celebration or any of the wishlist items, you are welcome to do so using the bank details below.
          </p>

          <div className="bg-[#FDFBF7] border border-[#C5A059]/30 rounded-2xl p-6 md:p-8 max-w-md mx-auto shadow-inner space-y-4 text-left">
            <div className="flex justify-between items-center border-b border-[#C5A059]/20 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#2D312E]/60 font-semibold">Bank Name</span>
              <span className="font-serif font-bold text-[#1B4D3E]">{bankDetails.bankName}</span>
            </div>

            <div className="flex justify-between items-center border-b border-[#C5A059]/20 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#2D312E]/60 font-semibold">Account Name</span>
              <span className="font-serif font-bold text-[#1B4D3E]">{bankDetails.accountName}</span>
            </div>

            <div className="flex justify-between items-center pt-1">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#2D312E]/60 font-semibold block">Account Number</span>
                <span className="font-serif font-bold text-xl text-[#1B4D3E] tracking-widest">{bankDetails.accountNumber}</span>
              </div>
              <button
                onClick={copyAccountNumber}
                className="flex items-center space-x-1.5 bg-[#1B4D3E] hover:bg-[#153b2f] text-[#FDFBF7] px-4 py-2.5 rounded-xl text-xs font-semibold shadow transition-all duration-200"
              >
                {copiedAccount ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-[#C5A059]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-[#C5A059]/20 py-10 bg-[#1B4D3E] text-[#FDFBF7]/80 text-center text-sm">
        <div className="max-w-5xl mx-auto px-6 space-y-3">
          <p className="font-serif text-lg font-medium text-[#C5A059]">The Birthday List</p>
          <p className="text-xs text-[#FDFBF7]/60">Celebrating Ebenezer Mobolaji Banjo • Crafted with elegance & sophistication.</p>
        </div>
      </footer>
    </div>
  );
}
const LibraryHeader = () => {
    return (
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between w-full mb-12 space-y-4 md:space-y-0">
        <div>
          <h3 className="text-sm font-mono tracking-[0.3em] text-purple-400 uppercase mb-2">
            // The Archive
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Compositions</span>
          </h2>
        </div>
        
        <button className="text-sm font-medium tracking-widest text-gray-400 uppercase transition-colors hover:text-white pb-1 border-b border-gray-700 hover:border-white">
          View Full Catalog
        </button>
      </div>
    );
  };
  
  export default LibraryHeader;
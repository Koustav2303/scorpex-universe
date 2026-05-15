import LibraryHeader from './LibraryHeader';
import BentoGrid from './BentoGrid';

const Library = () => {
  return (
    <section id="library" className="relative w-full py-24 md:py-32 bg-black z-10">
      <div className="container px-6 mx-auto max-w-7xl">
        <LibraryHeader />
        <BentoGrid />
      </div>
    </section>
  );
};

export default Library;
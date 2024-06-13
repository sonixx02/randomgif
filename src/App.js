import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className='w-full relative h-full flex flex-col bg-zinc-900 items-center'>
      <h1 className='bg-white rounded-lg text-center w-11/12 mt-[40px]  px-10 py-2 text-4xl mx-auto font-bold '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

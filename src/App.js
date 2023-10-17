import Info from "./components/Info";
import InputFilter from "./components/InputFilter";
import "./style/global.css";

const App = () => {
  return (
    <div>
      <h1 className="flex justify-center text-gray-100 font-extrabold text-3xl">
        Crypto App
      </h1>
      <header className="text-gray-100">
        <Info />
        <InputFilter />
      </header>
    </div>
  );
};

export default App;

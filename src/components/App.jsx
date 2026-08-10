import { Searchbar  } from "./Searchbar/Searchbar";
import css from './App.module.css';

export const App = () => {
  return (
    <div
      className={css.app}
    >
      <Searchbar/>
      React homework template
    </div>
  );
};

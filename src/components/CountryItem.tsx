import { CountryDto } from "../models/CountryDto";
import { flagemojiToPNG } from "../utils";
import styles from "./CountryItem.module.css";

interface CountryItemProps {
  country: CountryDto;
}

function CountryItem({ country }: CountryItemProps) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

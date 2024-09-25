import { Link } from "react-router-dom";
import { CityDto } from "../models/CityDto";
import { flagemojiToPNG } from "../utils";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

interface CityItemProps {
  city: CityDto;
}

export default function CityItem({ city }: CityItemProps) {
  const { id, cityName, emoji, date, position } = city;
  const { currentCity, deleteCity } = useCities();

  function onDeleteClicked(e: React.MouseEvent) {
    e.preventDefault();
    if (id) {
      deleteCity(id);
    }
  }

  return (
    <Link
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className={`${styles.cityItem} ${
        currentCity.id === id ? styles["cityItem--active"] : ""
      }`}
    >
      <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
      <span className={styles.name}>{cityName}</span>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn} onClick={onDeleteClicked}>
        &times;
      </button>
    </Link>
  );
}


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import CloudIcon from "@mui/icons-material/Cloud";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=600&auto=format&fit=crop&q=60";

  const HOT_URL =
    "https://images.unsplash.com/photo-1687986461420-ad216e99aa59?w=600&auto=format&fit=crop&q=60";

  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670598342794-249547599860?q=80&w=1170&auto=format&fit=crop";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop";

  const weather = (info.weather || "").toLowerCase();

  const isRain =
    weather.includes("rain") ||
    weather.includes("drizzle") ||
    weather.includes("thunderstorm");

  const isCloudy =
    weather.includes("cloud") ||
    weather.includes("overcast");

  const isSnow = weather.includes("snow");

  const imageUrl = isRain
    ? RAIN_URL
    : isSnow
      ? COLD_URL
      : isCloudy
        ? INIT_URL
        : HOT_URL;

  return (
    <div className="InfoBox">
      <div className="classContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={imageUrl}
            title={`Weather in ${info.city}`}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}

              {isRain ? (
                <ThunderstormIcon />
              ) : isSnow ? (
                <AcUnitIcon />
              ) : isCloudy ? (
                <CloudIcon />
              ) : (
                <SunnyIcon />
              )}
            </Typography>

            <Typography
              variant="body2"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as{" "}
                <b>{info.weather}</b> and feels like ={" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

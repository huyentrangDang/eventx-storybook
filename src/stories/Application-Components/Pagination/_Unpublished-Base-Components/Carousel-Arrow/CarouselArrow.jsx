import PropTypes from "prop-types";
import "../../../../assets/css/pagination/carousel.css";

export const CarouselArrow = ({ size, color, chevron }) => {
  return (
    <div
      className={[
        `carouser-arrow-size--${size}`,
        `carouser-arrow-color--${color}`,
      ].join(" ")}
    >
      <icon className={`${iconPath(size, color, chevron)}`} />
    </div>
  );
};

CarouselArrow.propTypes = {
  size: PropTypes.oneOf(["md", "lg"]),
  color: PropTypes.oneOf([
    "gray-light-bg",
    "gray-dark-bg",
    "primary-light-bg",
    "primary-dark-bg",
  ]),
  chevron: PropTypes.oneOf(["right", "left"]),
};

export const iconPath = (size, color, chevron) => {
  switch (size) {
    case "md": {
      if (chevron === "left") {
        if (color === "primary-light-bg" || color === "gray-light-bg") {
          return "chevron_left_base_white_md";
        }
        if (color === "primary-dark-bg") {
          return "chevron_left_primary700_md";
        }
        if (color === "gray-dark-bg") {
          return "chevron_left_gray700_md";
        }
      } else {
        if (color === "primary-light-bg" || color === "gray-light-bg") {
          return "chevron_right_base_white_md";
        }
        if (color === "primary-dark-bg") {
          return "chevron_right_primary700_md";
        }
        if (color === "gray-dark-bg") {
          return "chevron_right_gray700_md";
        }
      }

      break;
    }
    case "lg": {
      if (chevron === "left") {
        if (color === "primary-light-bg" || color === "gray-light-bg") {
          return "chevron_left_base_white_lg";
        }
        if (color === "primary-dark-bg") {
          return "chevron_left_primary700_lg";
        }
        if (color === "gray-dark-bg") {
          return "chevron_left_gray700_lg";
        }
      } else {
        if (color === "primary-light-bg" || color === "gray-light-bg") {
          return "chevron_right_base_white_lg";
        }
        if (color === "primary-dark-bg") {
          return "chevron_right_primary700_lg";
        }
        if (color === "gray-dark-bg") {
          return "chevron_right_gray700_lg";
        }
      }

      break;
    }

    default: {
      return {};
    }
  }
};

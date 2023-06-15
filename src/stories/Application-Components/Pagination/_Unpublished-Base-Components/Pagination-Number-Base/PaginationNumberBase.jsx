import PropTypes from "prop-types";
import "../../../../assets/css/pagination/pagination-number-base.css";
import "../../../../assets/css/text.css";

export const PaginationNumberBase = ({ shape, state, text }) => {
  return (
    <div className={`pagination-number-base-shape--${shape}-state--${state}`}>
      <div className={`content-pagination-number-base-shape--${shape}`}>
        <span
          className="text-sm-medium"
          style={{
            color:
              state === "hover-active" ? `var(--gray-800)` : `var(--gray-600)`,
            textAlign: "center",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

PaginationNumberBase.propTypes = {
  shape: PropTypes.oneOf(["circle", "square"]),
  state: PropTypes.oneOf(["focused", "hover-active", "default"]),
  text: PropTypes.string,
};

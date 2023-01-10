type Props = {
    onClick: () => void;
}

export const ShowMoreButton = ({ onClick }: Props) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      onClick={onClick}
      type="button"
    >
          Show more
    </button>
  </div>
);

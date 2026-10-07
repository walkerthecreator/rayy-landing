import './variant-selector.css';

export default function VariantSelector({ variant }) {
  return (
    <select
      className="variant-selector"
      aria-label="Choose design variant"
      value={variant === 2 ? '/new' : '/landing-split'}
      onChange={(event) => window.location.assign(event.target.value)}
    >
      <option value="/landing-split">Variant 1</option>
      <option value="/new">Variant 2</option>
    </select>
  );
}

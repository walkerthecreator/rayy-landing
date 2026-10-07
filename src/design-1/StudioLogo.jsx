// Text wordmarks for studios, each in a distinct typographic style. Drawn in currentColor.
export default function StudioLogo({ studio, className = '' }) {
  const initial = studio.name.replace(/^The /, '').charAt(0);
  return (
    <span className={`l-logo l-logo-${studio.logo} ${className}`}>
      {studio.logo === 'serifCaps' && <span className="l-logo-monogram" aria-hidden="true">{initial}</span>}
      <span className="l-logo-name">{studio.logo === 'boldLower' ? `${studio.name.toLowerCase()}.` : studio.name}</span>
    </span>
  );
}

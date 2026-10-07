// Renders one of the inline 24x24 stroke icons from data/content.js.
// PHP port: <svg viewBox="0 0 24 24" aria-hidden="true"><?= $icon ?></svg>
export default function Icon({ paths, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  );
}

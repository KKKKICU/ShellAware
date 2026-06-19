function PageHero({ eyebrow, title, copy, image, children, align = "left" }) {
  return (
    <section className={`page-hero page-hero-${align}`}>
      {image && (
        <figure className="page-hero-media">
          <img src={image} alt="" />
        </figure>
      )}
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  );
}

export default PageHero;

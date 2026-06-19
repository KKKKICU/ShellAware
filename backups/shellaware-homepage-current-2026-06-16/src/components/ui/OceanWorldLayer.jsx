function OceanWorldLayer() {
  return (
    <div className="ocean-world-layer" aria-hidden="true">
      <div className="ocean-depth-gradient" />
      <div className="ocean-light-beam beam-one" />
      <div className="ocean-light-beam beam-two" />
      <div className="ocean-light-beam beam-three" />
      <div className="ocean-current current-one" />
      <div className="ocean-current current-two" />
      <div className="ocean-current current-three" />

      {Array.from({ length: 14 }).map((_, index) => (
        <span key={index} className={`ocean-particle particle-${index + 1}`} />
      ))}
    </div>
  );
}

export default OceanWorldLayer;

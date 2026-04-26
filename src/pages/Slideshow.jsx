import { useState, useEffect, useRef } from "react";
import "../slideshow.css";

/*
 * Slideshow.jsx
 * Author: Alanah Little
 * Description: Fetches 10 cat images from The Cat API and displays them
 *              in a slideshow with First, Previous, Next, Last, Play,
 *              and Stop controls. Play cycles images every 5 seconds.
 */

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const INTERVAL_MS = 5000;

function Slideshow() {
  const [images, setImages]     = useState([]);
  const [current, setCurrent]   = useState(0);
  const [playing, setPlaying]   = useState(false);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const timerRef                = useRef(null);

  /* --- Fetch images on mount --- */
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images.");
        return res.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  /* --- Auto-play timer --- */
  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => {
          if (prev >= images.length - 1) {
            /* Stop at the end */
            setPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, INTERVAL_MS);
    }
    return () => clearInterval(timerRef.current);
  }, [playing, images.length]);

  /* --- Navigation handlers --- */
  const goFirst    = () => { stopPlay(); setCurrent(0); };
  const goPrev     = () => { stopPlay(); setCurrent((p) => Math.max(0, p - 1)); };
  const goNext     = () => { stopPlay(); setCurrent((p) => Math.min(images.length - 1, p + 1)); };
  const goLast     = () => { stopPlay(); setCurrent(images.length - 1); };
  const startPlay  = () => { if (current === images.length - 1) setCurrent(0); setPlaying(true); };
  const stopPlay   = () => { setPlaying(false); clearInterval(timerRef.current); };

  /* --- Render states --- */
  if (loading) return <p className="slideshow-status">Loading images…</p>;
  if (error)   return <p className="slideshow-status">Error: {error}</p>;
  if (images.length === 0) return <p className="slideshow-status">No images found.</p>;

  const img = images[current];

  return (
    <section className="slideshow-page">
      <h2>Cat Slideshow</h2>
      <p className="slideshow-source">
        Images via{" "}
        <a href="https://thecatapi.com/" target="_blank" rel="noreferrer">
          The Cat API
        </a>
      </p>

      {/* Image display */}
      <div className="slideshow-frame">
        <img
          key={img.id}
          src={img.url}
          alt={`Cat ${current + 1} of ${images.length}`}
          className="slideshow-img"
        />
        <span className="slideshow-counter">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Controls */}
      <div className="slideshow-controls">
        <button onClick={goFirst}   disabled={current === 0}                   aria-label="First">&#171; First</button>
        <button onClick={goPrev}    disabled={current === 0}                   aria-label="Previous">&#8249; Prev</button>
        <button onClick={goNext}    disabled={current === images.length - 1}   aria-label="Next">Next &#8250;</button>
        <button onClick={goLast}    disabled={current === images.length - 1}   aria-label="Last">Last &#187;</button>
        <button onClick={startPlay} disabled={playing}                         aria-label="Play" className="btn-play">&#9654; Play</button>
        <button onClick={stopPlay}  disabled={!playing}                        aria-label="Stop" className="btn-stop">&#9646;&#9646; Stop</button>
      </div>
    </section>
  );
}

export default Slideshow;
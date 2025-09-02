import { formatKZT } from '../utils/format';

function StarRating({ value = 0, max = 5 }) {
    const full = '★'.repeat(Math.min(value, max));
    const empty = '☆'.repeat(Math.max(0, max - value));
    return <span aria-label={`Rating ${value} of ${max}`}>{full}{empty}</span>;
}

export default function Product({
                                    title,
                                    price,
                                    inStock,
                                    availability,
                                    rating = 0,
                                    tags = []
                                }) {
    const onSale = tags.map(t => t.toLowerCase()).includes('sale');
    const discounted = onSale ? price * 0.9 : price;

    return (
        <article className="product-card" style={styles.card}>
            <header style={styles.header}>
                <h3 style={styles.title}>{title}</h3>
                <StarRating value={Number(rating)} />
            </header>

            <p style={styles.availability}>{availability}</p>

            <div style={styles.priceRow}>
                {!inStock ? (
                    <span style={styles.out}>Out of stock</span>
                ) : onSale ? (
                    <>
                        <span style={styles.discounted}>{formatKZT(discounted)}</span>
                        <span style={styles.original}>{formatKZT(price)}</span>
                        <span style={styles.badge}>–10%</span>
                    </>
                ) : (
                    <span style={styles.price}>{formatKZT(price)}</span>
                )}
            </div>

            {tags.length > 0 && (
                <ul style={styles.tags}>
                    {tags.slice(0,5).map((t, i) => (
                        <li key={i} style={styles.tag}>{t}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}

/* простые inline-стили для наглядности; в реальном проекте лучше CSS */
const styles = {
    card: { border:'1px solid #e5e7eb', borderRadius:12, padding:16, width:280, display:'flex', flexDirection:'column', gap:8 },
    header: { display:'flex', justifyContent:'space-between', alignItems:'center' },
    title: { margin:0, fontSize:18 },
    availability: { margin:'4px 0 8px', color:'#6b7280' },
    priceRow: { display:'flex', alignItems:'baseline', gap:8 },
    price: { fontWeight:700, fontSize:20 },
    discounted: { fontWeight:700, fontSize:20 },
    original: { textDecoration:'line-through', color:'#9ca3af' },
    out: { color:'#ef4444', fontWeight:600 },
    badge: { fontSize:12, background:'#fde68a', padding:'2px 6px', borderRadius:6 },
    tags: { display:'flex', gap:6, padding:0, margin:0, listStyle:'none', flexWrap:'wrap' },
    tag: { fontSize:12, background:'#f3f4f6', padding:'4px 8px', borderRadius:999 }
};
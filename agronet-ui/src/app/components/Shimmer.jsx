'use client';
import { Box, Skeleton } from '@mui/material';

export default function Shimmer({ type = 'card', count = 1 }) {
  if (type === 'card') {
    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {Array.from({ length: count }).map((_, i) => (
          <Box key={i} sx={{ width: 180, minHeight: 260, mb: 2 }}>
            <Skeleton variant="rounded" width={180} height={120} sx={{ mb: 1, borderRadius: 3 }} />
            <Skeleton width="80%" height={22} sx={{ mb: 0.5 }} />
            <Skeleton width="60%" height={16} />
          </Box>
        ))}
      </Box>
    );
  }
  if (type === 'tile') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <Box key={i} sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Skeleton variant="circular" width={80} height={80} sx={{ mb: 1 }} />
            <Skeleton width={80} height={18} />
          </Box>
        ))}
      </>
    );
  }
  if (type === 'list') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <Box key={i} sx={{ mb: 2 }}>
            <Skeleton variant="rounded" width="100%" height={60} />
          </Box>
        ))}
      </>
    );
  }
  // Default fallback
  return <Skeleton width="100%" height={40} />;
}

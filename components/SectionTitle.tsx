import { Box, Typography } from "@mui/material";

export default function SectionTitle({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 38 }, color: light ? "#fff" : "primary.main", mb: 1 }}>
        {title}
      </Typography>
      <Box sx={{ width: 54, height: 4, bgcolor: "secondary.main", borderRadius: 5, mb: 1.5 }} />
      {subtitle && <Typography color={light ? "rgba(255,255,255,.7)" : "text.secondary"}>{subtitle}</Typography>}
    </Box>
  );
}
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box id="home" className="hero-bg" sx={{ minHeight: { xs: 610, md: 560 }, display: "flex", alignItems: "center", color: "white" }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 620, py: { xs: 7, md: 9 } }}>
          <Typography
            sx={{
              fontWeight: 800,
              mb: 1.5
            }}
            color="secondary"
            component="h1"
            variant="h5">
            تعمیرات تخصصی لوازم گازسوز و برقی
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 46, sm: 62, md: 72 }, lineHeight: 1.05, mb: 2 }}>

          </Typography>
          <Typography
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: 21, md: 26 },
              fontWeight: 800,
              lineHeight: 1.7,
              textShadow: 5,
              mb: 2
            }}>
            با خیال راحت آشپزخانه‌تان را به ما بسپارید
          </Typography>
          <Typography sx={{
            color: "rgba(255,255,255,.9)",
            maxWidth: 570,
            lineHeight: 2,
            textShadow: 5,
            mb: 3
          }}
            component="p"
          >
            تعمیرات انواع اجاق گاز، فر، مایکروویو و هود توسط تکنسین‌های مجرب با استفاده از قطعات اصلی.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mb={3}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="tel:09124676047"
              startIcon={<LocalPhoneIcon />}
            >
              درخواست تعمیر فوری(کلیک کنید)
            </Button>
            <Button variant="outlined" size="large" href="#services" endIcon={<ArrowBackIcon />}
              sx={{ color: "#fff", borderColor: "rgba(255,255,255,.65)", "&:hover": { borderColor: "#fff" } }}>
              مشاهده خدمات
            </Button>
          </Stack>

          <Stack mt={5} direction="row" spacing={3} flexWrap="wrap" useFlexGap>
            {["اعزام سریع", "قطعات اصلی", "ضمانت خدمات"].map(t => (
              <Stack key={t} direction="row" spacing={.7} alignItems="center">
                <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 24 }} />
                <Typography variant="body1">{t}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
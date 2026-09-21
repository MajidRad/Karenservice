import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function CTA() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box className="cta-bg" sx={{ borderRadius: 4, p: { xs: 3, md: 5 }, color: "#fff" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between">
          <Stack direction="row" spacing={2} alignItems="center">
            <Logo />
            <Box>
              <Typography variant="h4" fontWeight={900} fontSize={{ xs: 24, md: 30 }}>نیاز به تعمیرکار دارید؟</Typography>
              <Typography sx={{ color: "rgba(255,255,255,.72)", mt: 1 }}>همین حالا درخواست خود را ثبت کنید تا در کوتاه‌ترین زمان با شما تماس بگیریم.</Typography>
            </Box>
          </Stack>
          <Stack direction='row' alignItems="center" spacing={2}>

            <Button href="tel:09124676047" variant="contained" color="secondary" size="large" startIcon={<LocalPhoneIcon />} sx={{ flexShrink: 0 }}>
              درخواست تعمیرکار
            </Button>
            <a href="https://wa.me/09124676047?text=سلام وقتتون بخیر" target="_blank" rel="noopener noreferrer">
              <Button  variant="contained" color="secondary" size="large" startIcon={<WhatsAppIcon />} sx={{ flexShrink: 0 }}>
                WhatsApp
              </Button >

            </a>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
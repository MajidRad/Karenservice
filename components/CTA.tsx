import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Logo from "./Logo";

export default function CTA() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Box className="cta-bg" sx={{ borderRadius: 4, p: { xs: 3, md: 5 }, color: "#fff" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between">
          <Stack direction="row" spacing={2} alignItems="center">
            <Logo/>
            <Box>
              <Typography variant="h4" fontWeight={900} fontSize={{ xs: 24, md: 30 }}>نیاز به تعمیرکار دارید؟</Typography>
              <Typography sx={{ color: "rgba(255,255,255,.72)", mt: 1 }}>همین حالا درخواست خود را ثبت کنید تا در کوتاه‌ترین زمان با شما تماس بگیریم.</Typography>
            </Box>
          </Stack>
          <Button href="tel:09124676047" variant="contained" color="secondary" size="large" startIcon={<LocalPhoneIcon />} sx={{ flexShrink: 0 }}>
            درخواست تعمیرکار
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
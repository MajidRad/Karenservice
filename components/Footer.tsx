import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box id="contact" sx={{ bgcolor: "#071f36", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Logo />
              <Typography fontWeight={900} fontSize={20}>تعمیرات لوازم گازی و برقی</Typography>
            </Stack>
            <Typography color="rgba(255,255,255,.65)" lineHeight={2}>تعمیر تخصصی تجهیزات آشپزخانه با تکنسین مجرب و ضمانت خدمات.</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2.7 }}>
            <Stack direction="row" spacing={1.5}>
              <LocationOnIcon sx={{ color: "secondary.main" }} />
              <Box><Typography fontWeight={800}>محدوده فعالیت</Typography><Typography variant="body2" color="rgba(255,255,255,.65)" mt={.5}>تمام مناطق کرج و حومه البرز</Typography></Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2.7 }}>
            <Stack direction="row" spacing={1.5}>
              <AccessTimeIcon sx={{ color: "secondary.main" }} />
              <Box><Typography fontWeight={800}>ساعات کاری</Typography><Typography variant="body2" color="rgba(255,255,255,.65)" mt={.5}>همه روزه ۸ صبح تا ۱۰ شب</Typography></Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2.6 }}>
            <Stack direction="row" spacing={1.5}>
              <LocalPhoneIcon sx={{ color: "secondary.main" }} />
              <Box >
                <Typography fontWeight={800}>تماس با ما</Typography>
                <Stack>

                  <Typography
                    component="a"
                    href="tel: 09124676047"
                    variant="body2"
                    color="#fff"
                    mt={1}>
                    09124676047
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    component="a"
                    href="tel: 09124676047"
                    variant="body2"
                    color="#fff"
                    mt={1}>
                    09354676047
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,.12)", my: 4 }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} gap={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <a href="https://wa.me/09124676047?text=سلام وقتتون بخیر" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </a>
            <a
              href="https://rubika.ir/09124676047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/rubika2.png"
                alt="Rubika"
                style={{ width: 60, height: 32 }}
              />
            </a>

          </Stack>
          <Typography
            variant="caption"
            color="rgba(255,255,255,.55)">
            1405 ©تمامی اطلاعات برای کارن سرویس محفوض است
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
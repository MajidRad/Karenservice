import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const items = [
  [GroupsIcon, "تکنسین‌های مجرب", "متخصص و آموزش‌دیده"],
  [AccessTimeIcon, "اعزام سریع تکنسین", "در کوتاه‌ترین زمان"],
  [VerifiedUserIcon, "تضمین کیفیت خدمات", "با ضمانت کتبی"],
  [HandshakeIcon, "پشتیبانی پس از تعمیر", "و پاسخگویی دائمی"],
  [PaymentsIcon, "قیمت منصفانه", "شفاف و بدون هزینه پنهان"],
  [StarBorderIcon, "استفاده از قطعات اصلی", "با کیفیت و مطمئن"],
] as const;

export default function WhyUs() {
  return (
    <Box id="about" sx={{ py: { xs: 7, md: 9 }, bgcolor: "#f5f9fc" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box className="technician-bg" sx={{ minHeight: 410, borderRadius: 4, boxShadow: "0 18px 50px rgba(9,40,70,.12)" }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6.5 }}>
            <SectionTitle title="چرا ما؟" subtitle="هدف ما تعمیر درست، سریع و شفاف دستگاه شماست." />
            <Grid container spacing={3}>
              {items.map(([Icon, title, desc]) => (
                <Grid key={title} size={{ xs: 12, sm: 6 }}>
                  <Stack direction="row" spacing={1.7} alignItems="flex-start">
                    <Icon sx={{ color: "primary.main", fontSize: 36 }} />
                    <Box>
                      <Typography fontWeight={900}>{title}</Typography>
                      <Typography variant="body2" color="text.secondary" mt={.5}>{desc}</Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
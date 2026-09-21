import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const testimonials = [
  { name: "حسین احمدی", text: "از سرعت عمل و دقت کارشون خیلی راضی‌ام. پیشنهاد می‌کنم.", avatar: "ح" },
  { name: "سارا رضایی", text: "قیمت مناسب بود و تعمیرکار خیلی حرفه‌ای برخورد کرد.", avatar: "س" },
  { name: "علی محمدی", text: "تکنسین بسیار حرفه‌ای و خوش‌برخورد بود و مشکل فر را سریع حل کرد.", avatar: "ع" },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 4, md: 7 } }}>
      <Container maxWidth="lg">
        <SectionTitle title="رضایت مشتریان" />
        <Grid container spacing={2.5}>
          {testimonials.map(t => (
            <Grid key={t.name} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%", border: "1px solid #e9eef3", boxShadow: "none" }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row">
                      {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} sx={{ color: "secondary.main", fontSize: 18 }} />)}
                    </Stack>
                    <FormatQuoteIcon sx={{ color: "#dbe5ee" }} />
                  </Stack>
                  <Typography color="text.secondary" lineHeight={2} my={2}>{t.text}</Typography>
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <Avatar sx={{ bgcolor: "primary.main" }}>{t.avatar}</Avatar>
                    <Typography fontWeight={900}>{t.name}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
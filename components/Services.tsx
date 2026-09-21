import BuildIcon from "@mui/icons-material/Build";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AirIcon from "@mui/icons-material/Air";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "تعمیر اجاق گاز",
    desc: "رفع نشتی، تنظیم شعله و مشکلات فنی",
    icon: <img src="/CountertopStove.jpg" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  },
  {
    title: "تعمیر فر گازی و برقی ",
    desc: "تعمیر انواع ترموکوپل، المنت و برد",
    icon: <img src="/oven1.jpg" style={{ width: 100, height: 100 }} />

  },
  {
    title: "تعمیر مایکروویو",
    desc: "رفع انواع مشکلات مایکروویو با قطعات اصلی",
    icon: <img src="/microwave.jpg" style={{ width: 140, height: 140 }} />
  },
  {
    title: "تعمیر ظرفشویی",
    desc: "رفع مشکلات شستشو، تعمیر پمپ، المنت و سنسورها",
    icon: <img src="/Dishwasher2.jpg"
      style={{ width: 100, height: 100 }}
    />
  },

  {
    title: "تعمیر لباسشویی",
    desc: "تعمیر برد، موتور، پمپ تخلیه و رفع لرزش و نشتی",
    icon: <img src="/WashingMachine.jpg"
      style={{ width: 100, height: 100 }} />
  },
  {
    title: "تعمیر هود",
    desc: "تعمیر موتور، برد و قطعات هود آشپزخانه",
    icon: <img src="/hood1.jpg" style={{ width: 140, height: 140 }} />
  },
  {
    title: "تعمیر تلویزیون",
    desc: "تعمیر برد تصویر، پنل، بک‌لایت و مشکلات روشن نشدن",
    icon: <img src="/tv.jpg" style={{ width: 120, height: 80 }} />
  },
  {
    title: "تعمیر آبگرمکن",
    desc: "تعمیر ترموکوپل، سنسورها، رسوب‌زدایی و رفع مشکلات گرمایش",
    icon: <img src="/water_heaters.png" style={{ width: 120, height: 120 }} />
  },
  {
    title: "تعمیر پکیج",
    desc: "تعمیر برد، پمپ، سنسورها، سرویس کامل و رفع ارورهای پکیج",
    icon: <img src="/package.jpg" style={{ width: 120, height: 120 }} />
  },

];

export default function Services() {
  return (
    <Box id="services" sx={{ py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg">
        <SectionTitle title="خدمات ما" subtitle="تعمیرات تخصصی انواع تجهیزات آشپزخانه" />
        <Grid container spacing={2}>
          {services.map(s => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Card sx={{
                height: "100%",
                border: "1px solid #e8eef4",
                boxShadow: "0 8px 28px rgba(9,40,70,.06)",
                transition: ".25s", "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 14px 34px rgba(9,40,70,.12)"
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 2,
                      bgcolor: "#f2f7fb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {s.icon}
                  </Box>

                  <Typography fontWeight={900} mb={1}>{s.title}</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.9} minHeight={55}>{s.desc}</Typography>
                  <Stack direction="row" spacing={.5} alignItems="center" sx={{ mt: 2, color: "primary.main" }}>
                    <Typography variant="body2" fontWeight={800}>اطلاعات بیشتر</Typography>
                    <ArrowBackIcon fontSize="small" />
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
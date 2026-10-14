"use client";

import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography
} from "@mui/material";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  ["صفحه اصلی", "#home"],
  ["خدمات", "#services"],
  ["درباره ما", "#about"],
  ["تماس با ما", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} color="inherit" sx={{ borderBottom: "1px solid #edf1f5", zIndex: 1200 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 74 }, justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Box sx={{ width: 120, height: 120, borderRadius: "50%", display: "grid", placeItems: "center", color: "secondary.main" }}>
              <Logo />
            </Box>
            <Box>
              <Typography fontWeight={900} lineHeight={1.1}>
                تعمیرات تخصصی لوازم خانگی
              </Typography>
              <Typography variant="caption" color="text.secondary">
                سریع · مطمئن · حرفه‌ای
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map(([label, href], i) => (
              <Typography key={href} component="a" href={href} fontSize={14} fontWeight={i === 0 ? 800 : 600}
                sx={{ position: "relative", py: 2.5, "&:hover": { color: "secondary.main" } }}>
                {label}
                {i === 0 && <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, bgcolor: "secondary.main", borderRadius: 3 }} />}
              </Typography>
            ))}
          </Stack>

          <Button
            component="a" href="tel:09124676047" variant="contained" color="primary"
            startIcon={<LocalPhoneIcon />} sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
            09124676047
          </Button>

          <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: "inline-flex", md: "none" }, color: "primary.main" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography fontWeight={900}>منوی سایت</Typography>
            <IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton>
          </Stack>
          <Stack>
            {links.map(([label, href]) => (
              <Button key={href} href={href} onClick={() => setOpen(false)} sx={{ justifyContent: "flex-start", py: 1.5 }}>
                {label}
              </Button>
            ))}
          </Stack>
          <Button fullWidth variant="contained" color="secondary" href="tel:09123456789" sx={{ mt: 2 }}>
            درخواست تعمیرکار
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
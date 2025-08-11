import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

// ===== Wrapper uses the SAME background as Mockup content area =====
const FAQWrapper = styled(Box)(({ theme }) => ({
  background: 'transparent',
  color: '#fff',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
}));

// Glassy card feel for each accordion
const GlassAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
  overflow: 'hidden',
  '&:before': { display: 'none' }, // remove MUI divider line
  '& + &': { marginTop: theme.spacing(2) },
  '&:hover': {
    borderColor: 'rgba(77,184,240,0.35)',
  },
}));

const GlassSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  '& .MuiAccordionSummary-content': {
    margin: 0,
    alignItems: 'center',
  },
}));

const GlassDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2.25),
  color: 'rgba(255,255,255,0.9)',
  lineHeight: 1.7,
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: '#fff',
    borderRadius: 12,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& input::placeholder': {
    color: 'rgba(255,255,255,0.6)',
  },
}));

const variants = {
  container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } },
  item: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
};

const FAQ = () => {
  const [query, setQuery] = React.useState('');

  const faqs = [
    {
      q: 'What tint levels do you offer?',
      a: 'We carry multiple VLT options (e.g., 5%, 15%, 20%, 30%, 35%, 50%, 70%) across dyed, ceramic, and premium ceramic lines. We can recommend the ideal shade based on your goals and state regulations.',
    },
    {
      q: 'Will ceramic tint interfere with my signals?',
      a: 'No—our ceramic films are signal-friendly and will not interfere with GPS, Bluetooth, cellular, or keyless entry systems.',
    },
    {
      q: 'How long does the install take?',
      a: 'Most full vehicle installs take 1.5–3 hours depending on the vehicle and package. We use a climate-controlled, dust-managed bay for a clean result.',
    },
    {
      q: 'Do you offer a warranty?',
      a: 'Yes. All installations include a lifetime warranty against peeling, bubbling, discoloration, and adhesive failure. Ask us for the written warranty details.',
    },
    {
      q: 'How do I care for new tint?',
      a: 'Avoid rolling down windows for 48–72 hours. Clean with ammonia-free products and soft microfiber. Slight haze during curing is normal and clears as moisture evaporates.',
    },
    {
      q: 'What’s the difference between dyed and ceramic film?',
      a: 'Dyed film is budget-friendly and improves privacy; ceramic film adds substantial heat rejection and UV protection with superior clarity and color stability.',
    },
  ];

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <FAQWrapper sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <SectionHeader>
          <Typography
            variant="overline"
            sx={{ color: '#2794d2', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em' }}
          >
            FAQs
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Common Questions, Clear Answers
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 720, mx: 'auto' }}>
            Everything you need to know about our films, process, and care.
          </Typography>
        </SectionHeader>

        {/* Two-column layout on md+ for dense FAQ */}
        <motion.div variants={variants.container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <Grid container spacing={3}>
            {(filtered.length ? filtered : faqs).map((item, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <motion.div variants={variants.item}>
                  <GlassAccordion disableGutters>
                    <GlassSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4db8f0' }} />}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff' }}>
                        {item.q}
                      </Typography>
                    </GlassSummary>
                    <GlassDetails>
                      <Typography variant="body2">{item.a}</Typography>
                    </GlassDetails>
                  </GlassAccordion>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </FAQWrapper>
  );
};

export default FAQ;

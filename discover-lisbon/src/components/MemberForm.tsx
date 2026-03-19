import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface PlayerFormData {
  name: string;
  number: number | '';
  study: string;
  nationality: string;
  work: string;
  discoveredFrisbee: string;
  yearsExperience: number | '';
  pastTeams: string;
  funFact: string;
}

const MemberForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<PlayerFormData>({
    name: '',
    number: '',
    study: '',
    nationality: '',
    work: '',
    discoveredFrisbee: '',
    yearsExperience: '',
    pastTeams: '',
    funFact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'number' || name === 'yearsExperience' ? (value === '' ? '' : parseInt(value)) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar dados para enviar
    const dataToSend = {
      name: formData.name,
      number: formData.number,
      study: formData.study,
      nationality: formData.nationality,
      work: formData.work,
      discoveredFrisbee: formData.discoveredFrisbee,
      yearsExperience: formData.yearsExperience,
      pastTeams: formData.pastTeams.split(',').map(team => team.trim()).filter(team => team),
      funFact: formData.funFact,
      timestamp: new Date().toISOString(),
    };

    try {
      // Enviar para Google Sheets via Google Apps Script
      const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercallback';
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Feedback
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          number: '',
          study: '',
          nationality: '',
          work: '',
          discoveredFrisbee: '',
          yearsExperience: '',
          pastTeams: '',
          funFact: '',
        });
        setSubmitted(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar. Tenta de novo!');
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent), #1e90ff)',
          border: 'none',
          color: 'white',
          fontSize: '1.8rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(9, 132, 227, 0.4)',
          zIndex: 50
        }}
        title="Adiciona o teu perfil"
      >
        <Plus size={32} />
      </motion.button>

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)',
            padding: '1rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={e => e.stopPropagation()}
            className="glass-card"
            style={{
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '2rem',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex'
              }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              👋 Conhece-nos Melhor!
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Partilha um pouco sobre ti e aparecerás no nosso site! 🎉
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  border: '2px solid #22c55e'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#22c55e', marginBottom: '0.5rem' }}>Perfeito!</h3>
                <p style={{ color: 'var(--text-muted)' }}>O teu perfil foi recebido com sucesso!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Nome e Número */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Teu nome completo"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(9, 132, 227, 0.3)',
                        borderRadius: '0.5rem',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Número
                    </label>
                    <input
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Ex: 7"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(9, 132, 227, 0.3)',
                        borderRadius: '0.5rem',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Estudo */}
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                    📚 Estudo
                  </label>
                  <input
                    type="text"
                    name="study"
                    value={formData.study}
                    onChange={handleChange}
                    placeholder="Ex: Engenharia Informática"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(9, 132, 227, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                {/* Nacionalidade e Trabalho */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                      🌍 Nacionalidade
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="Ex: Portugal 🇵🇹"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(9, 132, 227, 0.3)',
                        borderRadius: '0.5rem',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                      💼 Trabalho
                    </label>
                    <input
                      type="text"
                      name="work"
                      value={formData.work}
                      onChange={handleChange}
                      placeholder="Ex: Desenvolvedor"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(9, 132, 227, 0.3)',
                        borderRadius: '0.5rem',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Como descobriu Frisbee */}
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                    🥏 Como descobriu Frisbee?
                  </label>
                  <textarea
                    name="discoveredFrisbee"
                    value={formData.discoveredFrisbee}
                    onChange={handleChange}
                    placeholder="Conta a tua história..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(9, 132, 227, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      minHeight: '80px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Anos de Prática */}
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                    📅 Anos de Prática
                  </label>
                  <input
                    type="number"
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    placeholder="Ex: 3"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(9, 132, 227, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                {/* Equipas Passadas */}
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                    ⚠️ Equipas Passadas (separadas por vírgula)
                  </label>
                  <textarea
                    name="pastTeams"
                    value={formData.pastTeams}
                    onChange={handleChange}
                    placeholder="Ex: IST Ultimate, Madrid Frisbee Club"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(9, 132, 227, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      minHeight: '60px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Facto Curioso */}
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                    ✨ Facto Curioso
                  </label>
                  <textarea
                    name="funFact"
                    value={formData.funFact}
                    onChange={handleChange}
                    placeholder="Detalhe interessante sobre ti..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(9, 132, 227, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      minHeight: '60px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Botões */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    style={{
                      flex: 1,
                      padding: '0.8rem',
                      background: 'transparent',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '0.5rem',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.05)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseOut={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: '0.8rem',
                      background: 'linear-gradient(135deg, var(--accent), #1e90ff)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: 'white',
                      cursor: 'pointer',
                      fontWeight: '700',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(9, 132, 227, 0.4)';
                    }}
                    onMouseOut={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    Enviar Perfil ✅
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MemberForm;

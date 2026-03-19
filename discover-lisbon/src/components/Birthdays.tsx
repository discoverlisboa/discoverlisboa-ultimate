import { motion } from 'framer-motion';
import { Calendar, Cake } from 'lucide-react';

interface Birthday {
  name: string;
  date: string; // MM-DD format
  month: number;
  day: number;
}

const Birthdays = ({ t }: { t: any }) => {
  // Format: "January 15", "March 3", etc.
  const birthdays: Birthday[] = [
    // Add players here - format: { name: "Player Name", date: "MM-DD", month: 1, day: 15 }
    // Example:
    { name: "Add Players", date: "01-01", month: 1, day: 1 },
  ];

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Get upcoming birthdays (next 30 days)
  const today = new Date();
  const upcomingBirthdays = birthdays
    .filter(b => {
      const bday = new Date(today.getFullYear(), b.month - 1, b.day);
      if (bday < today) {
        bday.setFullYear(today.getFullYear() + 1);
      }
      const daysUntil = Math.ceil((bday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return daysUntil <= 30 && daysUntil > 0;
    })
    .sort((a, b) => {
      const aDate = new Date(today.getFullYear(), a.month - 1, a.day);
      const bDate = new Date(today.getFullYear(), b.month - 1, b.day);
      if (aDate < today) aDate.setFullYear(today.getFullYear() + 1);
      if (bDate < today) bDate.setFullYear(today.getFullYear() + 1);
      return aDate.getTime() - bDate.getTime();
    });

  // Group by month
  const birthdaysByMonth: { [key: number]: Birthday[] } = {};
  birthdays.forEach(b => {
    if (!birthdaysByMonth[b.month]) {
      birthdaysByMonth[b.month] = [];
    }
    birthdaysByMonth[b.month].push(b);
  });

  return (
    <section id="birthdays" style={{ 
      background: 'linear-gradient(135deg, rgba(9, 132, 227, 0.05), rgba(9, 132, 227, 0.02))',
      borderTop: '1px solid rgba(9, 132, 227, 0.1)',
      borderBottom: '1px solid rgba(9, 132, 227, 0.1)',
    }}>
      <div className="container" style={{ padding: '6rem 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Cake size={32} color="var(--accent)" />
              <h2 className="section-title" style={{ margin: 0 }}>Aniversários</h2>
              <Calendar size={32} color="var(--accent)" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              🎉 Celebramos cada um da equipa
            </p>
          </div>

          {/* Upcoming Birthdays */}
          {upcomingBirthdays.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'rgba(9, 132, 227, 0.1)',
                border: '1px solid rgba(9, 132, 227, 0.2)',
                borderRadius: '1rem',
                padding: '2rem',
                marginBottom: '3rem'
              }}
            >
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Cake size={20} /> Próximos 30 dias
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {upcomingBirthdays.map((birthday, i) => {
                  const bday = new Date(today.getFullYear(), birthday.month - 1, birthday.day);
                  if (bday < today) bday.setFullYear(today.getFullYear() + 1);
                  const daysUntil = Math.ceil((bday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card"
                      style={{
                        padding: '1.5rem',
                        textAlign: 'center',
                        background: 'rgba(9, 132, 227, 0.08)',
                        borderColor: 'rgba(9, 132, 227, 0.3)'
                      }}
                    >
                      <div style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                        {birthday.name}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        {birthday.day} de {monthNames[birthday.month - 1]}
                      </div>
                      <div style={{
                        background: 'rgba(9, 132, 227, 0.2)',
                        color: 'var(--accent)',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.85rem',
                        fontWeight: '700'
                      }}>
                        Em {daysUntil} dia{daysUntil !== 1 ? 's' : ''} 🎂
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Full Calendar */}
          <div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>Calendário do Ano</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {Object.keys(birthdaysByMonth).map(monthKey => {
                const month = parseInt(monthKey);
                const monthBirthdays = birthdaysByMonth[month];

                return (
                  <motion.div
                    key={month}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (month - 1) * 0.05 }}
                    className="glass-card"
                    style={{ padding: '1.5rem' }}
                  >
                    <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>
                      {monthNames[month - 1]}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {monthBirthdays.map((b, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.75rem',
                            background: 'rgba(9, 132, 227, 0.05)',
                            borderRadius: '0.5rem',
                            borderLeft: '2px solid var(--accent)',
                            fontSize: '0.9rem'
                          }}
                        >
                          <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{b.name}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{b.day}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              padding: '2rem',
              background: 'rgba(9, 132, 227, 0.08)',
              borderRadius: '1rem',
              border: '1px dashed rgba(9, 132, 227, 0.3)'
            }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Falta alguém? Contacta-nos para adicionar mais aniversários! 🎉
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Birthdays;

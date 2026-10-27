import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Pressable } from 'react-native'

const months = [
  { name: 'Agosto', number: 8 },
  { name: 'Setembro', number: 9 },
  { name: 'Outubro', number: 10 },
  { name: 'Novembro', number: 11 },
  { name: 'Dezembro', number: 12 },
]

const events = [
  { id: 'classes', title: 'Início das aulas', date: '03 AGO', start: '2026-08-03', end: '2026-08-03', type: 'Aulas', color: '#3478F6', icon: '↗' },
  { id: 'exams-one', title: 'Semana de provas · P1', date: '07–12 SET', start: '2026-09-07', end: '2026-09-12', type: 'Provas', color: '#9B6AE8', icon: '✎' },
  { id: 'recess', title: 'Recesso acadêmico', date: '12–16 OUT', start: '2026-10-12', end: '2026-10-16', type: 'Recesso', color: '#F39A3C', icon: '☼' },
  { id: 'exams-two', title: 'Semana de provas · P2', date: '09–14 NOV', start: '2026-11-09', end: '2026-11-14', type: 'Provas', color: '#9B6AE8', icon: '✎' },
  { id: 'graduation', title: 'Colação de grau', date: '18 DEZ', start: '2026-12-18', end: '2026-12-18', type: 'Formatura', color: '#25A889', icon: '✦' },
]

const weekdays = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM']

function dateKey(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function getEventForDate(date) {
  return events.find(event => date >= event.start && date <= event.end)
}

export default function Home() {
  const [monthIndex, setMonthIndex] = useState(2)
  const month = months[monthIndex]
  const firstDay = new Date(2026, month.number - 1, 1).getDay()
  const offset = (firstDay + 6) % 7
  const daysInMonth = new Date(2026, month.number, 0).getDate()
  const calendarDays = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ]
  function changeMonth(direction) {
    setMonthIndex(current => Math.max(0, Math.min(months.length - 1, current + direction)))
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F6F7FB" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View style={styles.brandMark}><Text style={styles.brandIcon}>✦</Text></View>
          <Text style={styles.topBarLabel}>VIDA ACADÊMICA</Text>
          <View style={styles.avatar}><Text style={styles.avatarText}>A</Text></View>
        </View>

        <View style={styles.heading}>
          <Text style={styles.eyebrow}>SEU SEMESTRE, EM DIA</Text>
          <Text style={styles.title}>Calendário{'\n'}acadêmico</Text>
          <Text style={styles.subtitle}>Acompanhe as datas importantes do semestre.</Text>
        </View>

        <View style={styles.semesterTag}>
          <View style={styles.semesterDot} />
          <Text style={styles.semesterText}>2º SEMESTRE 2026</Text>
        </View>

        <View style={styles.calendarCard}>
          <View style={styles.monthHeader}>
            <View>
              <Text style={styles.monthTitle}>{month.name}</Text>
              <Text style={styles.yearText}>2026 · Calendário letivo</Text>
            </View>
            <View style={styles.monthControls}>
              <Pressable
                accessibilityLabel="Mês anterior"
                accessibilityRole="button"
                disabled={monthIndex === 0}
                onPress={() => changeMonth(-1)}
                style={[styles.arrowButton, monthIndex === 0 && styles.disabledButton]}
              >
                <Text style={styles.arrowText}>‹</Text>
              </Pressable>
              <Pressable
                accessibilityLabel="Próximo mês"
                accessibilityRole="button"
                disabled={monthIndex === months.length - 1}
                onPress={() => changeMonth(1)}
                style={[styles.arrowButton, monthIndex === months.length - 1 && styles.disabledButton]}
              >
                <Text style={styles.arrowText}>›</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.weekdays}>
            {weekdays.map(day => <Text key={day} style={styles.weekday}>{day}</Text>)}
          </View>
          <View style={styles.daysGrid}>
            {calendarDays.map((day, index) => {
              const event = day ? getEventForDate(dateKey(2026, month.number, day)) : null
              return (
                <View key={`${month.number}-${index}`} style={styles.dayCell}>
                  {day ? (
                    <View style={[styles.dayNumber, event && { backgroundColor: event.color }]}>
                      <Text style={[styles.dayText, event && styles.eventDayText]}>{day}</Text>
                    </View>
                  ) : null}
                </View>
              )
            })}
          </View>

          <View style={styles.legend}>
            {[
              { label: 'Aulas', color: '#3478F6' },
              { label: 'Provas', color: '#9B6AE8' },
              { label: 'Recesso', color: '#F39A3C' },
              { label: 'Formatura', color: '#25A889' },
            ].map(item => (
              <View key={item.label} style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                <Text style={styles.legendText}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.eventsHeading}>
          <View>
            <Text style={styles.sectionTitle}>Datas importantes</Text>
            <Text style={styles.sectionSubtitle}>Neste semestre</Text>
          </View>
          <Text style={styles.eventCount}>{events.length} DATAS</Text>
        </View>

        {events.map(event => (
          <View key={event.id} style={styles.eventCard}>
            <View style={[styles.eventIcon, { backgroundColor: `${event.color}18` }]}>
              <Text style={[styles.eventIconText, { color: event.color }]}>{event.icon}</Text>
            </View>
            <View style={styles.eventDetails}>
              <Text style={styles.eventType}>{event.type.toUpperCase()}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
            </View>
            <View style={styles.eventDate}>
              <Text style={styles.eventDateText}>{event.date.split(' ')[0]}</Text>
              <Text style={styles.eventMonth}>{event.date.split(' ').slice(-1)[0]}</Text>
            </View>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>Planeje-se e aproveite cada etapa do semestre.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7FB' },
  container: { paddingHorizontal: 22, paddingBottom: 36 },
  topBar: { height: 58, flexDirection: 'row', alignItems: 'center' },
  brandMark: { width: 34, height: 34, borderRadius: 12, backgroundColor: '#243B80', alignItems: 'center', justifyContent: 'center' },
  brandIcon: { color: '#FFFFFF', fontSize: 17 },
  topBarLabel: { marginLeft: 10, color: '#66708B', fontSize: 10, letterSpacing: 1.5, fontWeight: '700' },
  avatar: { marginLeft: 'auto', width: 34, height: 34, borderRadius: 17, backgroundColor: '#E7EAF5', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#344577', fontSize: 13, fontWeight: '700' },
  heading: { marginTop: 21 },
  eyebrow: { color: '#6476B8', fontSize: 10, fontWeight: '700', letterSpacing: 1.8 },
  title: { marginTop: 9, color: '#1C2540', fontSize: 34, lineHeight: 39, fontWeight: '800', letterSpacing: -1 },
  subtitle: { marginTop: 9, color: '#7A8195', fontSize: 13, lineHeight: 20 },
  semesterTag: { alignSelf: 'flex-start', marginTop: 19, marginBottom: 17, paddingHorizontal: 12, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: '#E8ECFA' },
  semesterDot: { width: 7, height: 7, marginRight: 7, borderRadius: 4, backgroundColor: '#536FC4' },
  semesterText: { color: '#435AAB', fontSize: 10, fontWeight: '700', letterSpacing: 0.8 },
  calendarCard: { padding: 18, borderRadius: 20, backgroundColor: '#FFFFFF', shadowColor: '#25345E', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.06, shadowRadius: 14, elevation: 3 },
  monthHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  monthTitle: { color: '#202944', fontSize: 20, fontWeight: '700' },
  yearText: { marginTop: 4, color: '#949AAF', fontSize: 11 },
  monthControls: { flexDirection: 'row', gap: 8 },
  arrowButton: { width: 32, height: 32, borderRadius: 11, backgroundColor: '#F2F4F9', alignItems: 'center', justifyContent: 'center' },
  disabledButton: { opacity: 0.35 },
  arrowText: { color: '#3D4969', fontSize: 23, lineHeight: 26 },
  weekdays: { flexDirection: 'row', marginBottom: 8 },
  weekday: { width: `${100 / 7}%`, color: '#A0A5B5', fontSize: 9, fontWeight: '700', textAlign: 'center' },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayCell: { width: `${100 / 7}%`, height: 37, alignItems: 'center', justifyContent: 'center' },
  dayNumber: { width: 29, height: 29, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  dayText: { color: '#424A60', fontSize: 11, fontWeight: '500' },
  eventDayText: { color: '#FFFFFF', fontWeight: '700' },
  legend: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 14, paddingTop: 13, borderTopWidth: 1, borderTopColor: '#F0F1F6', gap: 12 },
  legendItem: { flexDirection: 'row', alignItems: 'center' },
  legendDot: { width: 7, height: 7, marginRight: 5, borderRadius: 4 },
  legendText: { color: '#747B8E', fontSize: 10 },
  eventsHeading: { marginTop: 25, marginBottom: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitle: { color: '#202944', fontSize: 18, fontWeight: '700' },
  sectionSubtitle: { marginTop: 4, color: '#9298A9', fontSize: 11 },
  eventCount: { color: '#6878B4', fontSize: 9, fontWeight: '700', letterSpacing: 0.8 },
  eventCard: { minHeight: 72, marginBottom: 9, paddingHorizontal: 13, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', borderRadius: 15, backgroundColor: '#FFFFFF' },
  eventIcon: { width: 40, height: 40, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  eventIconText: { fontSize: 17, fontWeight: '700' },
  eventDetails: { flex: 1, marginLeft: 12 },
  eventType: { color: '#9A9EAD', fontSize: 8, fontWeight: '700', letterSpacing: 1 },
  eventTitle: { marginTop: 4, color: '#29314B', fontSize: 12, fontWeight: '600' },
  eventDate: { minWidth: 47, alignItems: 'flex-end' },
  eventDateText: { color: '#313A59', fontSize: 12, fontWeight: '700' },
  eventMonth: { marginTop: 3, color: '#969BAA', fontSize: 9, fontWeight: '600' },
  footer: { alignItems: 'center', paddingTop: 17 },
  footerText: { color: '#A0A5B3', fontSize: 10 },
})
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function residencial() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D47A1" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Residencial Universitário</Text>
          <Text style={styles.headerSubtitle}>Seu lar durante a jornada acadêmica</Text>
        </View>

        {/* Imagem principal */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../assets/residencial/residencial4.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroText}>Vagas Abertas - Internato</Text>
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre o Internato</Text>
          <Text style={styles.description}>
            Inspirado no modelo de educação integral, o nosso residencial estudantil 
            oferece quartos confortáveis, áreas de convivência e um ambiente seguro e 
            focado no desenvolvimento acadêmico, físico e espiritual dos alunos.
          </Text>
        </View>

        {/* Detalhes */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailCard}>
            <Text style={styles.detailValue}>4 a 8</Text>
            <Text style={styles.detailLabel}>Alunos / Quarto</Text>
          </View>
          <View style={styles.detailCard}>
            <Text style={styles.detailValue}>Incluso</Text>
            <Text style={styles.detailLabel}>Refeitório</Text>
          </View>
          <View style={styles.detailCard}>
            <Text style={styles.detailValue}>100%</Text>
            <Text style={styles.detailLabel}>Monitoria</Text>
          </View>
        </View>

        {/* Galeria */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Galeria</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              require('../assets/residencial/residencial1.png'),
              require('../assets/residencial/residencial2.png'),
              require('../assets/residencial/residencial3.png'),
              require('../assets/residencial/residencial4.png'),
              require('../assets/residencial/residencial5.png'),
              require('../assets/residencial/residencial6.png'),
            ].map((img, index) => (
              <Image key={index} source={img} style={styles.galleryImage} />
            ))}
          </ScrollView>
        </View>

        {/* Diferenciais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Diferenciais</Text>
          {[
            'Salas de estudo',
            'Complexo esportivo e recreação',
            'Refeitório com cardápio balanceado',
            'Cultos e atividades espirituais',
            'Segurança e monitoria 24 horas',
            'Lavanderia compartilhada',
            'Oportunidades de experiências profissionais',
          ].map((item, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.featureDot} />
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* CTA */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Reservar Vaga</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Falar com a Preceptoria</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#1565C0',
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#E3F2FD',
    fontSize: 14,
    marginTop: 6,
  },
  heroContainer: {
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heroImage: {
    width: '100%',
    height: 220,
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(13, 71, 161, 0.85)',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  heroText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#0D47A1',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#37474F',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  detailCard: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BBDEFB',
  },
  detailValue: {
    color: '#1565C0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailLabel: {
    color: '#546E7A',
    fontSize: 12,
    marginTop: 4,
  },
  galleryImage: {
    width: 160,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#E3F2FD',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1565C0',
    marginRight: 12,
  },
  featureText: {
    color: '#455A64',
    fontSize: 15,
  },
  ctaContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: '#1565C0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1565C0',
  },
  secondaryButtonText: {
    color: '#1565C0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

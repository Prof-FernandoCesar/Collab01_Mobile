import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { cores, espaco, raio, fonteMono } from '../constantes/tema';
import { FundoTech, Rotulo, CabecalhoSecao, Cartao, Selo, Etiqueta, Grade, Rodape } from '../componentes/interface';
import CartaoExpansivel from '../componentes/CartaoExpansivel';
import { instituicao, pedagogia, docencia, gestao, diferenciais, matriz } from '../dados/faama';

const SECOES = [
  { id: 'visao', titulo: 'Visão geral' },
  { id: 'docencia', titulo: 'Docência' },
  { id: 'gestao', titulo: 'Gestão' },
  { id: 'diferenciais', titulo: 'Diferenciais' },
  { id: 'matriz', titulo: 'Matriz' },
];

export default function Pedagogia() {
  const { secao } = useLocalSearchParams();
  const rolagem = useRef(null);
  const posicoes = useRef({});
  const alturaAbas = useRef(0);
  const [ativa, setAtiva] = useState(SECOES[0].id);
  const [medido, setMedido] = useState(false);

  function registrar(id) {
    return (e) => {
      posicoes.current[id] = e.nativeEvent.layout.y;
      if (Object.keys(posicoes.current).length === SECOES.length) setMedido(true);
    };
  }

  function irPara(id, animado = true) {
    const y = posicoes.current[id];
    if (y == null) return;
    rolagem.current?.scrollTo({ y: Math.max(0, y - alturaAbas.current), animated: animado });
    setAtiva(id);
  }

  useEffect(() => {
    if (medido && secao) irPara(String(secao), false);
  }, [medido, secao]);

  function aoRolar(e) {
    const y = e.nativeEvent.contentOffset.y + alturaAbas.current + 24;
    let atual = SECOES[0].id;
    for (const s of SECOES) {
      if (posicoes.current[s.id] != null && y >= posicoes.current[s.id]) atual = s.id;
    }
    if (atual !== ativa) setAtiva(atual);
  }

  return (
    <ScrollView
      ref={rolagem}
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
      stickyHeaderIndices={[1]}
      onScroll={aoRolar}
      scrollEventThrottle={32}
    >
      <Hero />

      <Abas
        ativa={ativa}
        aoSelecionar={irPara}
        aoMedir={(e) => (alturaAbas.current = e.nativeEvent.layout.height)}
      />

      <View onLayout={registrar('visao')} style={styles.secao}>
        <VisaoGeral />
      </View>

      <View onLayout={registrar('docencia')} style={styles.secao}>
        <Docencia />
      </View>

      <View onLayout={registrar('gestao')} style={styles.secao}>
        <GestaoEscolar />
      </View>

      <View onLayout={registrar('diferenciais')} style={styles.secao}>
        <Diferenciais />
      </View>

      <View onLayout={registrar('matriz')} style={styles.secao}>
        <Matriz />
        <Coordenacao />
      </View>

      <Rodape>
        Fontes: faama.edu.br/pedagogia, Projeto Pedagógico do Curso e Matriz Pedagogia 2023.
        {'\n'}Atribuições de gestão e descrições dos cards foram redigidas para demonstração.
      </Rodape>
    </ScrollView>
  );
}

function Hero() {
  return (
    <View style={styles.hero}>
      <FundoTech linhas={5} colunas={4} />
      <Rotulo>{instituicao.sigla} // Graduação presencial</Rotulo>
      <Text style={styles.heroTitulo}>Pedagogia</Text>
      <Text style={styles.heroSub}>{pedagogia.titulo}</Text>

      <View style={styles.heroSelos}>
        <Etiqueta cor={cores.textoForte} borda={cores.primaria}>
          {pedagogia.conceitoMec}
        </Etiqueta>
        <Etiqueta>{pedagogia.autorizacao}</Etiqueta>
      </View>

      <View style={styles.fatos}>
        {pedagogia.fatos.map((f, i) => (
          <View key={f.rotulo} style={[styles.fato, i > 0 && styles.fatoDivisor]}>
            <Text style={styles.fatoValor}>{f.valor}</Text>
            <Text style={styles.fatoRotulo}>{f.rotulo}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Abas({ ativa, aoSelecionar, aoMedir }) {
  return (
    <View style={styles.abasFundo} onLayout={aoMedir}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.abas}>
        {SECOES.map((s) => {
          const selecionada = s.id === ativa;
          return (
            <Pressable
              key={s.id}
              onPress={() => aoSelecionar(s.id)}
              accessibilityRole="tab"
              accessibilityState={{ selected: selecionada }}
              style={[styles.aba, selecionada && styles.abaAtiva]}
            >
              <Text style={[styles.abaTexto, selecionada && styles.abaTextoAtivo]}>{s.titulo}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

function VisaoGeral() {
  return (
    <>
      <CabecalhoSecao indice="01" rotulo="Visão geral" titulo="Proposta pedagógica" />
      <Text style={styles.paragrafo}>{pedagogia.proposta}</Text>

      <Cartao destaque style={{ marginTop: 18 }}>
        <Rotulo>Objetivo do curso</Rotulo>
        <Text style={styles.citacao}>{pedagogia.objetivo}</Text>
      </Cartao>

      <Text style={styles.subtituloBloco}>Organização curricular em três núcleos</Text>
      {pedagogia.nucleos.map((n, i) => (
        <View key={n.nome} style={styles.nucleo}>
          <View style={styles.nucleoLinha}>
            <View style={styles.nucleoPonto} />
            {i < pedagogia.nucleos.length - 1 ? <View style={styles.nucleoTraco} /> : null}
          </View>
          <View style={styles.nucleoTextos}>
            <Text style={styles.nucleoNome}>{n.nome}</Text>
            <Text style={styles.textoSuave}>{n.texto}</Text>
          </View>
        </View>
      ))}
    </>
  );
}

function Docencia() {
  return (
    <>
      <CabecalhoSecao
        indice="02"
        rotulo="Docência"
        titulo="Onde você vai ensinar"
        subtitulo="Toque em um card para ver disciplinas e estágio."
      />
      {docencia.map((d, i) => (
        <CartaoExpansivel key={d.id} sigla={d.sigla} titulo={d.titulo} resumo={d.resumo} inicialAberto={i === 0}>
          <Text style={styles.paragrafoCartao}>{d.descricao}</Text>
          <Rotulo cor={cores.textoApagado} style={styles.rotuloBloco}>
            Disciplinas-chave
          </Rotulo>
          <View style={styles.etiquetas}>
            {d.disciplinas.map((disc) => (
              <Etiqueta key={disc} cor={cores.texto}>
                {disc}
              </Etiqueta>
            ))}
          </View>
          <View style={styles.estagio}>
            <Text style={styles.estagioTexto}> {d.estagio}</Text>
          </View>
        </CartaoExpansivel>
      ))}
    </>
  );
}

function GestaoEscolar() {
  return (
    <>
      <CabecalhoSecao
        indice="03"
        rotulo="Gestão escolar"
        titulo="Liderança educacional"
        subtitulo="O pedagogo também conduz a escola: pessoas, currículo e projetos."
      />
      {gestao.map((g) => (
        <Cartao key={g.sigla} style={styles.gestao}>
          <View style={styles.gestaoTopo}>
            <Selo texto={g.sigla} tamanho={38} cor={cores.destaque} />
            <Text style={styles.gestaoTitulo}>{g.titulo}</Text>
          </View>
          {g.atribuicoes.map((a) => (
            <Text key={a} style={styles.atribuicao}>
              <Text style={{ color: cores.primaria }}>- </Text>
              {a}
            </Text>
          ))}
          <Text style={styles.gestaoBase}>{g.base}</Text>
        </Cartao>
      ))}
      <View style={styles.faixa}>
        <Text style={styles.faixaValor}>100 h</Text>
        <Text style={styles.faixaTexto}>Estágio Supervisionado III dedicado à Gestão Escolar, no 7º semestre.</Text>
      </View>
    </>
  );
}

function Diferenciais() {
  return (
    <>
      <CabecalhoSecao indice="04" rotulo="Diferenciais FAAMA" titulo="Por que estudar aqui" />
      <Grade colunas={1}>
        {diferenciais.map((d, i) => (
          <Cartao key={d.titulo}>
            <Text style={styles.diferencialIndice}>{String(i + 1).padStart(2, '0')}</Text>
            <Text style={styles.diferencialTitulo}>{d.titulo}</Text>
            <Text style={styles.textoSuave}>{d.texto}</Text>
            <View style={[styles.etiquetas, { marginTop: 12 }]}>
              {d.itens.map((item) => (
                <Etiqueta key={item} cor={cores.destaque} borda={cores.bordaForte}>
                  {item}
                </Etiqueta>
              ))}
            </View>
          </Cartao>
        ))}
      </Grade>
    </>
  );
}

function Matriz() {
  const [aberto, setAberto] = useState(null);
  return (
    <>
      <CabecalhoSecao
        indice="05"
        rotulo="Matriz 2023"
        titulo="Matriz curricular"
        subtitulo="8 semestres · 3.668 horas. Toque em um período."
      />
      <View style={styles.matriz}>
        {matriz.map((p) => {
          const total = p.disciplinas.reduce((soma, [, ch]) => soma + ch, 0);
          const estaAberto = aberto === p.periodo;
          return (
            <View key={p.periodo} style={styles.periodo}>
              <Pressable
                onPress={() => setAberto(estaAberto ? null : p.periodo)}
                accessibilityRole="button"
                accessibilityState={{ expanded: estaAberto }}
                style={styles.periodoTopo}
              >
                <Text style={[styles.periodoNumero, estaAberto && { color: cores.destaque }]}>
                  {String(p.periodo).padStart(2, '0')}
                </Text>
                <Text style={styles.periodoNome}>{p.periodo}º semestre</Text>
                <Text style={styles.periodoTotal}>{total} h</Text>
                <Text style={styles.periodoSeta}>{estaAberto ? '-' : '+'}</Text>
              </Pressable>
              {estaAberto
                ? p.disciplinas.map(([nome, ch]) => (
                    <View key={nome} style={styles.disciplina}>
                      <Text style={[styles.disciplinaNome, nome.startsWith('Estágio') && styles.disciplinaEstagio]}>
                        {nome}
                      </Text>
                      <Text style={styles.disciplinaCh}>{ch} h</Text>
                    </View>
                  ))
                : null}
            </View>
          );
        })}
      </View>
    </>
  );
}

function Coordenacao() {
  return (
    <Cartao style={{ marginTop: 24 }}>
      <Rotulo>Coordenação do curso</Rotulo>
      <Text style={styles.coordNome}>{pedagogia.coordenador}</Text>
      <Text style={styles.textoSuave}>{pedagogia.docentes} docentes, entre especialistas, mestres e doutores.</Text>
      <View style={styles.contato}>
        <Text style={styles.contatoTexto}>{instituicao.telefone}</Text>
        <Text style={styles.contatoTexto}>{instituicao.site}</Text>
      </View>
    </Cartao>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    paddingBottom: 40,
  },
  hero: {
    paddingHorizontal: espaco.tela,
    paddingTop: 32,
    paddingBottom: 24,
    overflow: 'hidden',
  },
  heroTitulo: {
    fontSize: 48,
    fontWeight: '900',
    color: cores.textoForte,
    letterSpacing: -1,
    marginTop: 10,
  },
  heroSub: {
    fontSize: 16,
    color: cores.textoSuave,
    marginTop: 2,
  },
  heroSelos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  fatos: {
    flexDirection: 'row',
    marginTop: 18,
    backgroundColor: 'rgba(14, 22, 38, 0.9)',
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.medio,
    paddingVertical: 14,
  },
  fato: {
    flex: 1,
    alignItems: 'center',
  },
  fatoDivisor: {
    borderLeftWidth: 1,
    borderLeftColor: cores.borda,
  },
  fatoValor: {
    fontSize: 20,
    fontWeight: '800',
    color: cores.textoForte,
  },
  fatoRotulo: {
    fontFamily: fonteMono,
    fontSize: 10,
    color: cores.textoSuave,
    marginTop: 2,
  },
  abasFundo: {
    backgroundColor: cores.fundo,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  abas: {
    paddingHorizontal: espaco.tela - 4,
    paddingVertical: 10,
  },
  aba: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  abaAtiva: {
    backgroundColor: cores.primariaForte,
    borderColor: cores.primariaForte,
  },
  abaTexto: {
    fontSize: 13,
    fontWeight: '600',
    color: cores.textoSuave,
  },
  abaTextoAtivo: {
    color: cores.textoForte,
  },
  secao: {
    paddingHorizontal: espaco.tela,
    paddingTop: espaco.secao,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 25,
    color: cores.texto,
  },
  citacao: {
    fontSize: 15,
    lineHeight: 23,
    color: cores.texto,
    marginTop: 8,
  },
  subtituloBloco: {
    fontSize: 17,
    fontWeight: '700',
    color: cores.textoForte,
    marginTop: 26,
    marginBottom: 14,
  },
  textoSuave: {
    fontSize: 14,
    lineHeight: 21,
    color: cores.textoSuave,
    marginTop: 3,
  },
  nucleo: {
    flexDirection: 'row',
  },
  nucleoLinha: {
    width: 20,
    alignItems: 'center',
  },
  nucleoPonto: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: cores.destaque,
    backgroundColor: cores.fundo,
    marginTop: 4,
  },
  nucleoTraco: {
    flex: 1,
    width: 2,
    backgroundColor: cores.borda,
    marginVertical: 4,
  },
  nucleoTextos: {
    flex: 1,
    marginLeft: 12,
    paddingBottom: 18,
  },
  nucleoNome: {
    fontSize: 15,
    fontWeight: '700',
    color: cores.textoForte,
  },
  paragrafoCartao: {
    fontSize: 14,
    lineHeight: 21,
    color: cores.texto,
  },
  rotuloBloco: {
    marginTop: 14,
    marginBottom: 8,
  },
  etiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  estagio: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(34, 211, 238, 0.1)',
    borderRadius: raio.pequeno,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  estagioTexto: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.destaque,
  },
  gestao: {
    marginBottom: 10,
  },
  gestaoTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  gestaoTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: cores.textoForte,
    marginLeft: 12,
  },
  atribuicao: {
    fontSize: 14,
    lineHeight: 22,
    color: cores.texto,
  },
  gestaoBase: {
    fontFamily: fonteMono,
    fontSize: 11,
    color: cores.textoApagado,
    marginTop: 10,
  },
  faixa: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.primariaForte,
    borderRadius: raio.medio,
    padding: 16,
    marginTop: 4,
  },
  faixaValor: {
    fontSize: 26,
    fontWeight: '900',
    color: cores.textoForte,
    marginRight: 14,
  },
  faixaTexto: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    color: '#DBEAFE',
  },
  diferencialIndice: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.primaria,
  },
  diferencialTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: cores.textoForte,
    marginTop: 6,
  },
  matriz: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.medio,
    overflow: 'hidden',
  },
  periodo: {
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  periodoTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  periodoNumero: {
    fontFamily: fonteMono,
    fontSize: 13,
    color: cores.primaria,
    width: 32,
  },
  periodoNome: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: cores.textoForte,
  },
  periodoTotal: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.textoSuave,
    marginRight: 12,
  },
  periodoSeta: {
    fontFamily: fonteMono,
    fontSize: 16,
    color: cores.destaque,
    width: 14,
    textAlign: 'center',
  },
  disciplina: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingLeft: 46,
    paddingRight: 14,
    backgroundColor: cores.fundo,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: cores.borda,
  },
  disciplinaNome: {
    flex: 1,
    fontSize: 13,
    color: cores.texto,
    paddingRight: 10,
  },
  disciplinaEstagio: {
    color: cores.destaque,
    fontWeight: '700',
  },
  disciplinaCh: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.textoApagado,
  },
  coordNome: {
    fontSize: 17,
    fontWeight: '700',
    color: cores.textoForte,
    marginTop: 8,
  },
  contato: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
  },
  contatoTexto: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.destaque,
  },
});

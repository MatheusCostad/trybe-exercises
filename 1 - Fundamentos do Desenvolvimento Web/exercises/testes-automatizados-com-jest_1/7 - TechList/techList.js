function techList(technologies, name) {
  const technologyList = technologies.sort().map((technology) => ({
    tech: technology,
    name,
    }));

  return (technologies.length === 0) ? 'Vazio!' : technologyList;
}

module.exports = techList;
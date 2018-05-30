const Storage = {
  sectors: [
    { name: 'BoomBox', value: 'boombox' },
    { name: 'Living Room', value: 'livingroom' }
  ],

  getSector() {
    let sector = this.sectors[0];

    const cachedSector = localStorage.getItem('sector');
    if (cachedSector) {
      sector = JSON.parse(cachedSector);
    }

    return sector;
  },

  setSector(sector) {
    localStorage.setItem('sector', JSON.stringify(sector));
  }
};

export default Storage;
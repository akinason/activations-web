<template>
  <div id="software-list" class="is_showing">
    <div class="software-list-container">
      <div class="software-list" v-if="filterSoftware.length">
        <div class="software is_showing" v-for="software in filterSoftware" :key="software.id">
          <router-link :to="{ path: '/software/' + software.id }" class="software-wrapper">
            <!-- img -->
            <div class="img-container">
              <img :src="software.preview_image" alt="software-img" />
            </div>
            <!-- content -->
            <div class="description-container">
              <div class="description">
                <section class="app-info">
                  <div class="header">
                    <h3 class="app-title">{{ software.name }}</h3>
                    <span>version: {{ software.version }}</span>
                  </div>
                  <p class="app-description">{{ software.short_description }}</p>
                </section>
                <p class="author">
                  author:
                  <span>{{ software.author.first_name }} {{ software.author.last_name }}</span>
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="software-empty" v-else>
        <div class="empty">
          <h3>No software found</h3>
        </div>
      </div>
    </div>
    <!-- pagination container -->
    <div class="pagination-container" v-if="softwares.length > limit">
      <div class="pagination flex-container">
        <div class="page dot active" @click="update_by_dots">
          <p>{{ current_page > 2 ? current_page - 2 : 1 }}</p>
        </div>
        <div class="page dot" v-if="softwares.length > limit" @click="update_by_dots">
          <p>{{ current_page > 2 ? current_page - 1 : 2 }}</p>
        </div>
        <div class="page dot" v-if="softwares.length > limit * 2" @click="update_by_dots">
          <p>{{ current_page > 3 ? current_page + 0 : 3 }}</p>
        </div>
        <div class="page dot more" v-if="softwares.length > limit * 3">
          <p>{{ current_page > 2 ? current_page + 1 : '...' }}</p>
        </div>
        <div class="page btn-next" @click="update_visible_software(limit, current_page + 1, true)">
          <p>next</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main';
import axios from '@/api/axios';

export default {
  name: 'software-list',
  data() {
    return {
      softwares: [],
      search: '',
      // pagination variable
      limit: 10,
      current_page: 0,
      visible_software: [],
    };
  },
  computed: {
    filterSoftware: function() {
      if (!this.search) {
        return this.visible_software;
      }

      let filter = [];
      let software = this.softwares.filter((software) => software.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase()));
      filter.push(software);
      return filter[0];
    },
  },

  methods: {
    update_by_dots(event) {
      this.update_visible_software(this.limit, parseInt(event.target.textContent) - 1, true);
    },

    update_visible_software(limit, page_number, event) {
      const dots = document.getElementsByClassName('dot');

      this.current_page = page_number;

      // create a copy of this.software into software variable
      let softwares = [];
      for (let i = 0; i < this.softwares.length; i++) {
        softwares[i] = this.softwares[i];
      }

      // pagination function
      this.visible_software = softwares.splice(page_number * limit, page_number * limit + limit);
      if (this.visible_software.length < 1) {
        // if there's no object in the softwares restart from page 0
        this.current_page = 0;
        page_number = 0;
        this.visible_software = softwares.splice(this.current_page * limit, this.current_page * limit + limit);
      }
      // utils cases for better performance

      if (this.visible_software.length > limit) {
        // if object is more than limit splice according to limits
        this.visible_software = this.visible_software.splice(0, limit);
      }

      if (event) {
        // dom and mounted check
        Array.from(dots, (dot) => {
          dot.classList.remove('active');
        });

        if (dots[page_number] == undefined) {
          dots[3].classList.add('active');
        } else {
          dots[page_number].classList.add('active');
        }
      }
      //
    },
  },
  beforeMount() {
    bus.$emit('toggleLoading');
  },
  mounted() {
    axios
      .get('/api/softwares')
      .then((response) => {
        this.softwares = response.data.data;
        this.update_visible_software(this.limit, this.current_page, false);
        bus.$emit('toggleLoading');
      })
      .catch((error) => {
        if (error.response) {
          bus.$emit('popup', { success: false, msg: error.response.data.detail });
          return bus.$emit('toggleLoading');
        }

        bus.$emit('popup', { success: false, msg: error });
        return bus.$emit('toggleLoading');
      });

    bus.$on('filterSoftware', (filter_name) => {
      this.search = filter_name;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';

#software-list {
  width: 100%;

  .software-list-container {
    margin: 50px 0;
    padding-top: 10px;

    @include media-query(1440px, 2600px) {
      margin-top: 80px;
    }
  }

  .software-list {
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 210px;
    gap: 2em;

    @include media-query(1024px, 1400px) {
      width: 80%;
    }

    @include media-query(1024px) {
      width: 95%;
      gap: 1.2em;
    }

    @include media-query(680px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 2em;
    }
  }

  .software {
    width: 100%;
    cursor: pointer;
    transition: 155ms ease-out;
    box-shadow: 0px 0.34px 1.6px 0px rgba(17, 40, 46, 0.39);

    &:hover {
      box-shadow: 0px 0.34px 2px 1px rgba(17, 40, 46, 0.274);
    }

    .software-wrapper {
      display: flex;

      .img-container {
        width: 60%;
        height: 210px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .description-container {
        width: 100%;
        padding: 1em;

        .description {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        section.app-info {
          color: rgb(2, 25, 39);

          .header {
            border-bottom: 1px solid #ddd6;
            padding-bottom: 5px;

            h3 {
              font-size: 1.45em;
              margin-bottom: 10px;
            }

            span {
              font-size: 13px;
              font-weight: 460;
              margin-bottom: 8px;
            }
          }

          p.app-description {
            padding-top: 0.67em;
            font-size: 14px;
            letter-spacing: 0.67px;
            word-spacing: 1px;
            line-height: 1.57;
          }
        }

        .author {
          margin-top: auto;
          font-size: 12px;
          text-transform: capitalize;
          font-weight: 500;
          letter-spacing: 0.56px;
          word-spacing: 1px;
          color: rgba(3, 31, 48, 0.87);
          text-align: end;
        }
      }
    }
  }

  // software empty
  .software-empty {
    width: 100%;

    h3 {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.67px;
      word-spacing: 1px;
    }
  }

  // pagination
  .pagination-container {
    width: 100%;
    text-align: center;
    margin-bottom: 3.12em;

    .pagination {
      width: 100%;
      justify-content: center;
      align-items: center;

      .page {
        padding: 10px 15px;
        cursor: pointer;
        margin-right: 3px;
        border-radius: 2px;

        &:hover {
          background-color: rgba(221, 221, 221, 0.336);
        }

        &:last-child {
          margin-right: 0;
        }
      }
      .page.active {
        background-color: #ddd !important;
      }
      .page.more {
        // padding: 0;
        user-select: none;
        pointer-events: none;
        background: none;
      }
      .page.btn-next {
        padding: 11px 30px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.67px;
        font-size: 13px;
        background-color: rgba(248, 77, 77, 0.938);
        margin-left: 20px;
      }
    }
  }
}
</style>

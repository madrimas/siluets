<template>
  <div>
    <md-toolbar md-elevation="0">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Your body measurements</h3>
      </div>
    </md-toolbar>
    <form novalidate class="md-layout" @submit.prevent="validateSingleEntry">
      <md-card class="md-layout-item">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('weight')">
                <label for="weight">Weight</label>
                <md-input name="weight" id="weight" autocomplete="weight" v-model="form.weight" />
                <span class="md-error" v-if="!$v.form.weight.required">You have to enter weight</span>
                <span class="md-error" v-else-if="!$v.form.weight.decimal">Invalid number format</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('waist')">
                <label for="waist">Waist</label>
                <md-input name="waist" id="waist" autocomplete="waist" v-model="form.waist" />
                <span class="md-error" v-if="!$v.form.waist.required">You have to enter waist</span>
                <span class="md-error" v-else-if="!$v.form.waist.decimal">Invalid number format</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('hips')">
                <label for="hips">Hips</label>
                <md-input name="hips" id="hips" autocomplete="hips" v-model="form.hips" />
                <span class="md-error" v-if="!$v.form.hips.required">You have to enter hips</span>
                <span class="md-error" v-else-if="!$v.form.hips.decimal">Invalid number format</span>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button
            type="submit"
            class="md-primary"
            @click="handleAddMeasurement"
          >Send measurements</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <md-toolbar md-elevation="0">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">History</h3>
      </div>
    </md-toolbar>
    <md-table>
      <md-table-row>
        <md-table-head>ID</md-table-head>
        <md-table-head>Weight</md-table-head>
        <md-table-head>Waist</md-table-head>
        <md-table-head>Hips</md-table-head>
        <md-table-head>Date</md-table-head>
      </md-table-row>
      <md-table-row v-for="measurement in measurements" :key="measurement.id">
        <md-table-cell md-numeric>{{ measurement.id }}</md-table-cell>
        <md-table-cell>{{ measurement.weight }}</md-table-cell>
        <md-table-cell>{{ measurement.waist }}</md-table-cell>
        <md-table-cell>{{ measurement.hips }}</md-table-cell>
        <md-table-cell>{{ measurement.date.toDate().toLocaleDateString("pl-PL") }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, decimal } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { ADD_MEASUREMENT, FETCH_MEASUREMENTS } from "@/store/actions.type";

export default {
  name: "measurements",
  mixins: [validationMixin],
  data: () => ({
    form: {
      weight: null,
      waist: null,
      hips: null
    }
  }),
  computed: {
    ...mapGetters(["measurements"])
  },
  mounted: function(){
    this.$store.dispatch(FETCH_MEASUREMENTS)
  },
  methods: {
    validateSingleEntry: function() {
      this.$v.$touch();
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    handleAddMeasurement: function() {
      let measurement = {
        weight: this.form.weight,
        waist: this.form.waist,
        hips: this.form.hips
      };

      this.$store.dispatch(ADD_MEASUREMENT, measurement);
      this.form = {
        weight: null,
        waist: null,
        hips: null
      };
    }
  },
  validations: {
    form: {
      weight: {
        required,
        decimal
      },
      waist: {
        required,
        decimal
      },
      hips: {
        required,
        decimal
      }
    }
  }
};
</script>
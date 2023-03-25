# Vanus Connector Templates

Vanus connection templates are pre-configured templates for [Vanus Cloud](https://cloud.vanus.ai) and Vanus Open-Source. It is written is JSON. These templates helps users create easy-to-use configurations when they use Vanus SaaS or the Vanus OSS.

# Template Structure

The template is structured in a simple way to help contributors name their templates in a consistent manner.

The **events** folder contains the template of the different event triggers.

- When creating a template that **does not** exist from the already made source-sink templates, the contributor must create a new folder inside the `events folder` with the format **name_of_source-name_of_sink**. An example is `github-http` where **github** is the source & **http** is the sink.

- If the source-sink folder already exists, the contributor should create a new file with **name_of_source-name_of_sink-event_name.json**. An example is `github-discord-star_event.json` where **github** is the source, **discord** is the sink and **star-event** is the event type. It should be in a json format.

- The **mock-up** folder contains the `mock.ts` file which is the metadata of the template events. The template has the following:
  - A `sinkIcon` which is the name of the sink connector
  - A `source` which is the name of the source of the folder
  - A `sink` which is the name of the sink connector of the folder
  - A `description` which is the description of the template
  - A `subTitle` which is a summary what the template does
  - An `id` which is the unique id of the template. The id is generated from the current day's date and a template number. For example, the first template created for a particular day will have the format, **todayDate_1** e.g `20230323_1`. For the second template created for a particular day, it will end with `_2`.

# How to contribute

To contribute to the Vanus Templates,

1. Fork the repository
2. Create a new branch for each template you want to create
3. Follow the Template Structure above to create your templates
4. After creating, submit a pull request.
